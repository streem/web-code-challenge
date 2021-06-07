
interface ButtonProps {
    onClick(): void;
    children?: React.ReactNode
}

interface ControlsProps {
    addButton: ButtonProps;
    removeButton: ButtonProps;
}

export function Controls(props: ControlsProps) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Button
            onClick={props.addButton.onClick}>
                Add
            </Button>
            <Button
            onClick={props.removeButton.onClick}>
                Remove
            </Button>
        </div>
    )
}

function Button(props: ButtonProps) {
    return (
        <button style={{
            minWidth: '100px',
            margin: '10px'
        }}
        
        onClick={() => props.onClick()}>
            {props.children}
        </button>
    )
}