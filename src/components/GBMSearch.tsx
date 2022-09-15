import {
    Button,
    Input,
    Paper,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    useTheme,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MultipleSelect from "../form_elements/MultipleSelect";
import HeaderFooter from "./HeaderFooter";
import { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CDateTimePicker from "../form_elements/TriggerTime/CDateTimePicker";
import CTextField from "../form_elements/Common/CTextField";

let inputs: { [key: string]: any } = {
    trigtime: { label: "Trigger Time", min: undefined, max: undefined },
    trigutc: { label: "Trigger UTC", min: undefined, max: undefined },
    duration: { label: "Duration", min: undefined, max: undefined },
    hr_25: { label: "HR 25", min: undefined, max: undefined },
    hr_50: { label: "HR 50", min: undefined, max: undefined },
    hr_75: { label: "HR 75", min: undefined, max: undefined },
    event_grade: { label: "Event Grade", min: undefined, max: undefined },
    saa: { label: "SAA", min: undefined, max: undefined },
    sgr: { label: "SGR", min: undefined, max: undefined },
    sgrb: { label: "SGRB", min: undefined, max: undefined },
    lgrb: { label: "LGRB", min: undefined, max: undefined },
    sflare: { label: "SFLARE", min: undefined, max: undefined },
    tgf: { label: "TGF", min: undefined, max: undefined },
    transnt: { label: "TRANSNT", min: undefined, max: undefined },
    distpar: { label: "DISTPAR", min: undefined, max: undefined },
    loclpar: { label: "LOCLPAR", min: undefined, max: undefined },
    no_evaluation: {
        label: "NO EVALUATION",
        min: undefined,
        max: undefined,
    },
    sig_min: {
        label: "Maximum Significance",
        min: undefined,
        max: undefined,
    },
    sig_max: {
        label: "Minimum Significance",
        min: undefined,
        max: undefined,
    },
};

function minmax(field: any) {
    return [field.min, field.max];
}

export default function GBMSearch() {
    const theme = useTheme();

    const [timeMethod, setTimeMethod] = useState(false);
    const [timeRange, setTimeRange] = useState<any[]>(minmax(inputs.trigutc));
    const [duration, setDuration] = useState(minmax(inputs.duration));

    const [open, setOpen] = useState(false);

    const methods = ["Bayesian", "Poisson", "SNR"];
    const modes = ["Mode 1", "Mode 2", "Mode 3", "Mode 4"];

    const onMethodModeSelect = (id: string, value: string[]) => {
        console.log(id, value);
    };

    const onTimeChange = (index: number, value: string) => {
        let timeRange_ = timeRange?.slice();
        if (timeRange_) {
            timeRange_[index] = value;
            setTimeRange(timeRange_);
        }
    };

    const onTimeMethodChange = (event: any, selected: boolean) => {
        setTimeMethod(selected);
    };

    const updateRanges = (ranges: any) => {
        Object.entries(ranges).forEach((entry) => {
            inputs[entry[0]].min = (entry[1] as number[])[0];
            inputs[entry[0]].max = (entry[1] as number[])[1];
        });

        console.log(inputs);
    };

    const onSubmit = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            alert("Not yet...");
        }, 2000);
    };

    useEffect(() => {
        fetch("http://magnetars.sabanciuniv.edu/mysql_utils/get_ranges.php", {
            method: "GET",
        })
            .then((resp) => resp.json())
            .then((data) => updateRanges(data))
            .catch((reason) => console.log(reason));
    }, []);

    return (
        <HeaderFooter>
            <Typography style={theme.h1}>GBM Database Search</Typography>
            <Divider style={theme.divider} />

            <Box m={4}>
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={2} >
                        <MultipleSelect
                            id="method-select"
                            label={"Methods"}
                            contents={methods}
                            onChange={onMethodModeSelect}></MultipleSelect>
                        <MultipleSelect
                            id="mode-select"
                            label={"Modes"}
                            contents={modes}
                            onChange={onMethodModeSelect}></MultipleSelect>
                    </Stack>

                    <Stack spacing={1}>
                        <Box p={2} component={Paper}>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            mb={1}>
                                <Typography >Trigger UTC</Typography>
                                <Switch onChange={onTimeMethodChange} />
                                <Typography>Trigger Time</Typography>
                            </Stack>

                            <Stack direction={"row"}>
                                {timeMethod ? (
                                    <Stack spacing={5} direction="row" m={1}>
                                        <CTextField
                                            index={0}
                                            label="From"
                                            onDisable={undefined}
                                            disabled={false}
                                            default_value={inputs.trigtime.min}
                                            onChange={
                                                onTimeChange
                                            }></CTextField>
                                        <CTextField
                                            index={1}
                                            label="To"
                                            onDisable={undefined}
                                            disabled={false}
                                            default_value={inputs.trigtime.max}
                                            onChange={
                                                onTimeChange
                                            }></CTextField>
                                    </Stack>
                                ) : (
                                    <Stack spacing={5} direction="row" m={1}>
                                        <CDateTimePicker
                                            index={0}
                                            label="From"
                                            default_value={inputs.trigutc.min}
                                            onDisable={undefined}
                                            onChange={
                                                onTimeChange
                                            }></CDateTimePicker>
                                        <CDateTimePicker
                                            index={1}
                                            label="To"
                                            default_value={inputs.trigutc.max}
                                            onDisable={undefined}
                                            onChange={
                                                onTimeChange
                                            }></CDateTimePicker>
                                    </Stack>
                                )}
                            </Stack>
                        </Box>

                        <Box p={2} component={Paper}>
                            <Typography>Duration</Typography>

                            <Stack direction={"row"} spacing={5} m={1}>
                                <CTextField
                                    index={0}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.min
                                    }></CTextField>
                                <CTextField
                                    index={1}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.max
                                    }></CTextField>
                            </Stack>
                        </Box>
                        <Box p={2} component={Paper}>
                            <Typography mb={3} fontWeight={'bold'}>HR Values</Typography>
                            <Typography ml={1} fontSize={"small"}>HR 25</Typography>
                            <Stack direction={"row"} spacing={5} m={1} mt={0}>
                                <CTextField
                                    index={0}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.min
                                    }></CTextField>
                                <CTextField
                                    index={1}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.max
                                    }></CTextField>
                            </Stack>{" "}
                            <Typography ml={1} fontSize={"small"}>HR 50</Typography>
                            <Stack direction={"row"} spacing={5} m={1} mt={0}>
                                <CTextField
                                    index={0}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.min
                                    }></CTextField>
                                <CTextField
                                    index={1}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.max
                                    }></CTextField>
                            </Stack>{" "}
                            <Typography ml={1} fontSize={"small"}>HR 75</Typography>
                            <Stack direction={"row"} spacing={5} m={1} mt={0}>
                                <CTextField
                                    index={0}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.min
                                    }></CTextField>
                                <CTextField
                                    index={1}
                                    label="From"
                                    onChange={(i, v) => {}}
                                    onDisable={undefined}
                                    disabled={false}
                                    default_value={
                                        inputs.duration.max
                                    }></CTextField>
                            </Stack>
                        </Box>
                        <Box p={2} component={Paper}></Box>
                        <Box p={2} component={Paper}></Box>
                    </Stack>

                    <Stack direction={"row"} justifyContent="center">
                        <Button variant="contained" onClick={onSubmit}>
                            Search
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={undefined}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </HeaderFooter>
    );
}
