interface BoxProps {
    index: number
}

export function Box(props: BoxProps) {

    return (
        <div 
        style={{
            backgroundColor: 'navy',
            position: 'relative',
            color: 'white',
            fontSize: '3rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent:  'center',
            alignItems: 'center'
        }} >
            {props.index}
        </div>
    )
}