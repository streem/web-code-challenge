import { useRef, useEffect } from "react";

interface ResultProps {
    children: React.ReactNode
    aspectRatio: number
    minimumGap: number
}

interface Dimensions {
    width: number
    height: number
}

export function Result({children, aspectRatio, minimumGap}: ResultProps) {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!container.current) return;

        const autoGrid = new AutoGridLogic();
        const stopAutoGrid = autoGrid.connect(container.current, {
            aspectRatio: aspectRatio,
            minimumGap: minimumGap,
        });

        return () => stopAutoGrid();
    }, [container, aspectRatio, minimumGap]);

    return (
        <div  ref={container} style={{
            backgroundColor: '#fafafa',
            position: 'absolute',
            margin: '0 auto',
            height: '80%',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, var(--item-width))',
            gridTemplateRows: 'repeat(auto-fit, var(--item-height))',
            placeContent: 'space-evenly'
            
        }}>
            {children}
        </div>
    )
}

interface ItemDimensionsConfig {
    parentWidth: number;
    parentHeight: number;
    childrenCount: number;
    requirements: AutoGridConfig;
}

interface AutoGridConfig {
    aspectRatio: number; // width / height
    minimumGap: number;
}

class AutoGridLogic {
    /**
     * connect will start monitoring a div element (which should have display: grid) for resize events.
     * On resize events, the css grid items will automatically be resized based on the config's aspect ratio
     * @param parentElement The HTMLDivElement that is a CSS Grid
     */
    public connect(parentElement: HTMLDivElement, autoGridConfig: AutoGridConfig) {
        // listen for the container resizing
        const resizeObserver = new ResizeObserver(() => {
            if (parentElement && autoGridConfig) {
                this.organizeContainerItems(parentElement, autoGridConfig);
            }
        });

        // listen for children being added or removed
        const childObserver = new MutationObserver(mutations => {
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].type === 'childList') {
                    this.organizeContainerItems(parentElement, autoGridConfig);
                }
            }
        });

        childObserver.observe(parentElement, { childList: true });
        resizeObserver.observe(parentElement);

        // Immediately resize items
        requestAnimationFrame(() => {
            const parentComputedStyles = window.getComputedStyle(parentElement);

            if (parentComputedStyles.display !== 'grid') {
                resizeObserver.unobserve(parentElement);
                childObserver.disconnect();
                return;
            }

            this.organizeContainerItems(parentElement, autoGridConfig);
        });

        return () => {
            childObserver.disconnect();
            resizeObserver.unobserve(parentElement);
        };
    }

    private organizeContainerItems(parent: HTMLDivElement, requirements: AutoGridConfig) {
        // If we do not have children, then we cannot resize them.
        const children = parent.children;
        if (!children.length) {
            return;
        }

        // Obtain the dimensions of the parent element
        const parentDOMRect = parent.getBoundingClientRect();
        // Get best item dimensions and apply property
        const dimensions = this.getGridItemDimensions({
            parentWidth: parentDOMRect.width,
            parentHeight: parentDOMRect.height,
            childrenCount: children.length,
            requirements,
        });

        parent.style.setProperty('--item-width', dimensions.width + 'px');
        parent.style.setProperty('--item-height', dimensions.height + 'px');
    }

    /**
     * Please perform all of your work in `getGridItemDimensions`. This is invoked when
     * a div is added or removed, or when the window is resized. 
     * 
     * Use the information available to determine the width and height of each div.
     * 
     * @param config Information you can use to determine what the width & height of each item should be.
     * @returns Dimensions - an object that describes the width and height of each item
     */
    private getGridItemDimensions(config: ItemDimensionsConfig): Dimensions {

        console.log({config})

        const height = 100
        const width = height * config.requirements.aspectRatio

        return {
            width,
            height
        }
     
    }
}