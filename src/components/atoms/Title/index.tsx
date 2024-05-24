interface ITitle{
    text: string;
}

export function Title({ ...props }: ITitle){
    return(
        <h1
            style={{
                color: '#424242',
                margin: '0 auto',
                width: 'fit-content',
            }}
        >
            {props.text}
        </h1>
    )
}