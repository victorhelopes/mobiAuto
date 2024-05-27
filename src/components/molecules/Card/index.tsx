import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface ICard {
    buttonText: string;
    buttonIsDisabled: boolean;
    children: React.ReactNode;
}

export function Card({ ...props }: ICard){
    const router = useRouter()

    return (
        <div
            style={{
                backgroundColor: 'white',
                maxWidth: '32rem',
                margin: 'auto',
                padding: '1.875rem 2.875rem',
                borderRadius: '0.25rem',
                boxShadow: '0 0.125 0.125 0.125 #00000025'
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
                    disabled={props.buttonIsDisabled}
                    onClick={()=>{router.push('/carInfos')}}
                    style={
                        !props.buttonIsDisabled ? 
                            {
                                backgroundColor: '#5D00BF'
                            }
                        : 
                        {}
                    }
                >
                    {props.buttonText}
                </Button>
            </div>
        </div>
    )
}