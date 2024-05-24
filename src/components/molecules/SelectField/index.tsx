import { ILabel, Label } from "@/components/atoms/Label";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface ISelectField{
    options: ISelectOption[];
    label: ILabel;
    value: string;
    onClick: (value: string) => void;
}

interface ISelectOption{
    value: string | number;
    text: string;
}

export function SelectField({ ...props }: ISelectField){
    const handleChange = (event: SelectChangeEvent) => {
        props.onClick(event.target.value as string);
      };

    return(
        <FormControl 
            fullWidth 
            style={{
                marginBottom: '1rem'
            }}
        >
            <Label 
                id={props.label.id} 
                name={props.label.name}
            />

            <Select
                id={props.label.id} 
                label={props.label.name}
                value={props.value}
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