import { CheckBox, PostAddSharp } from "@mui/icons-material";
import { Switch, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

type PDateTimePicker = {
    default_value: any;
    onChange: any;
    onDisable: any;
    index: number;
    label: string;
    disabled?: boolean;
};

export default function CDateTimePicker(props: PDateTimePicker) {
    const [value, setValue] = useState(props.default_value);

    const onChange = (newValue: any) => {
        props.onChange(props.index, newValue);
        setValue(newValue);
    };

    return (
        <>
            <Stack direction="row" spacing={1} alignItems={"center"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        disabled={props.disabled}
                        views={[
                            "year",
                            "month",
                            "day",
                            "hours",
                            "minutes",
                            "seconds",
                        ]}
                        renderInput={(props) => <TextField {...props} />}
                        ampm={false}
                        inputFormat={"YYYY-MM-DD HH:mm:ss"}
                        mask="____-__-__ __:__:__"
                        label={props.label}
                        value={value}
                        onChange={onChange}
                    />
                </LocalizationProvider>

                <Switch
                    size="small"
                    onChange={(e, c) => props.onDisable(props.index, c)}
                />
            </Stack>
        </>
    );
}
