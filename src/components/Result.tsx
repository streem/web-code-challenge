interface ResultProps {
    children: React.ReactNode
}
export function Result(props: ResultProps) {
    return (
        <div style={{
            backgroundColor: '#fafafa',
            position: 'absolute',
            margin: '0 auto',
            height: '80%',
            width: '100%',
            
        }}>
            {props.children}
        </div>
    )
}