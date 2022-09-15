import { Switch, TextField } from "@mui/material";
import { Stack } from "@mui/system";

type PTextField = {
    label: string;
    index: number;
    default_value?: string;
    onDisable: any;
    disabled: boolean;
    onChange: (arg0: number, arg1: string) => void;
};

export default function CTextField(props: PTextField) {
    const onChange = (event: any) => {
        props.onChange(props.index, event.target.value);
    };

    return (
        <Stack direction='row' spacing={1} alignItems={'center'}>
            <TextField
                size="small"
                sx={{width:"281px"}}
                disabled={props.disabled}
                label={props.label}
                onChange={onChange}
                defaultValue={props.default_value}></TextField>

            <Switch
                size="small"
                onChange={(e, c) => props.onDisable(props.index, c)}
            />
        </Stack>
    );
}
