interface IChip {
    text: string;
}

export function Chip({ ...props }: IChip){
    return (
        <h1 style={{
            backgroundColor: '#00A38C',
            color: "#FFF",
            borderRadius: '2rem',
            width: 'fit-content',
            padding: '0.5rem 1rem',
            margin: '1rem auto',
            fontWeight: 'bold'
        }}>
            {props.text}
        </h1>
    )
}