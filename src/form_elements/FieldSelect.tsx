import { useState, useEffect } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

type PFieldSelect = {
    fields: {id:string,label:string}[];
    onSelect: any;
};

export default function FieldSelect({ fields, onSelect }: PFieldSelect) {
    const theme = useTheme();
    const [selected, setSelected] = useState<string[]>([]);

    const getLabel = (id:string) => {
        return fields.find(item => item.id === id)?.label;
    }


    const handleChange = (event: SelectChangeEvent<typeof selected>) => {
        const {
            target: { value },
        } = event;

        setSelected(
            typeof value === "string" ? value.split(",") : value
        );
    };



    useEffect(() => {
        onSelect(selected);
        console.log(selected);
        
    }, [selected]);

    return (
        <div>
            <FormControl sx={ { minWidth:'615px' }}>
                <InputLabel id="field-multiple-chip-label">Search Fields</InputLabel>
                <Select
                    labelId="field-multiple-chip-label"
                    id="field-multiple-chip"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Search Fields" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                            }}>
                            {selected.map((value) => (
                                <Chip key={value} label={getLabel(value)} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}>
                    {fields.map(({id,label}) => (
                         <MenuItem
                            key={label}
                            value={id}
                            style={getStyles(label, selected, theme)}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
