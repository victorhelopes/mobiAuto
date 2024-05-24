import { Button } from "@mui/material";

interface ICard {
    buttonText: string;
    children: React.ReactNode;
}

export function Card({ ...props }: ICard){
    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '515px',
                margin: 'auto',
                padding: '1.875rem 2.875rem',
                borderRadius: '0.25rem'
            }}
        >
                {props.children}
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }} 
            >
                <Button 
                    variant="contained" 
                    disabled 
                >
                    {props.buttonText}
                </Button>
            </div>
        </div>
    )
}