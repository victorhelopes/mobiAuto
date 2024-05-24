import { InputLabel } from "@mui/material";

export interface ILabel {
    id: string;
    name: string;
}

export function Label({ ...props}: ILabel){
    return <InputLabel id={props.id}>{props.name}</InputLabel>
}