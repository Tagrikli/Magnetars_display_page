import { useState, useEffect, useCallback } from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


type PMultipleSelect = {
    contents: string[];
    onChange: any;
    label: string;
    id: string;
};

export default function MultipleSelect({
    contents,
    onChange,
    label,
    id
}: PMultipleSelect) {
    const [items, setItems] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof items>) => {
        const {
            target: { value },
        } = event;

        setItems(typeof value === "string" ? value.split(",") : value);
    };

    useEffect(() => {

        onChange(id, items);

    },[items])

    return (
        <div>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="select-multiple-label">{label}</InputLabel>
                <Select
                    labelId="select-multiple-label"
                    id="select-multiple-checkbox"
                    multiple
                    value={items}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}>
                    {contents.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={items.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
