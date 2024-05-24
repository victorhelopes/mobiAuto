interface ISubtitle{
    text: string;
}

export function Subtitle({ ...props }: ISubtitle){
    return(
        <h2
            style={{
                color: '#424242',
                margin: 'auto',
                width: 'fit-content',
                marginTop: '0.5rem',
                marginBottom: '1rem'
          }} 
        >
            {props.text}
        </h2>
    )
}