interface IChip {
    text: string;
    loading: boolean;
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
            {props.loading ? 'Carregando' : props.text}
        </h1>
    )
}