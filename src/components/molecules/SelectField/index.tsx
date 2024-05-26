import { ILabel, Label } from "@/components/atoms/Label";
import { Options } from "@/store/ducks/cars/types";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface ISelectField{
    options: ISelectOption[];
    label: ILabel;
    value: Options;
    onClick: (value: Options) => void;
}

export interface ISelectOption{
    value: string | number;
    text: string;
}

export function SelectField({ ...props }: ISelectField){
    const handleChange = (event: SelectChangeEvent) => {
        const optionSelected = event.target.value.split(',')
            props.onClick({
                codigo: optionSelected[0],
                nome: optionSelected[1]
            });
      };

    return(
        <FormControl  
            style={{
                marginBottom: '1rem',
                width: '100%'
            }}
        >
            <Label 
                id={props.label.id} 
                name={props.label.name}
            />
            <Select
                id={props.label.id} 
                label={props.label.name}
                value={props.value.codigo + ',' + props.value.nome}
                onChange={handleChange}
            >
                {props.options.map((option: ISelectOption, index)=>{
                    return (
                        <MenuItem 
                            key={index} 
                            value={option.value}
                        >
                            {option.text}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}