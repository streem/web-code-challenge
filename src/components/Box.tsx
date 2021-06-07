interface BoxProps {}

export function Box(props: BoxProps) {

    // Boxes must be a 16/9 ratio
    const ratio = 16/9
    const height = 100
    const width = height * ratio

    return (
        <div 
        style={{
            backgroundColor: 'navy',
            position: 'relative',
            height: `${height}px`,
            width: `${width}px`
        }} />
    )
}