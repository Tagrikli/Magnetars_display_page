import {
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import HeaderFooter from "./HeaderFooter";

const EVENT_DATA = [
    {
        type: "POSSION MODE 1",
        event_count: 115058,
        event_count2: 4915,
        range: "100716−151231 & 160514−160821 & 170124−180323 & 190101−201231",
    },
    {
        type: "POSSION MODE 2",
        event_count: 107533,
        event_count2: 3485,
        range: "100716−110319 & 110601−151231 & 180801−181009 & 190101−190410 & 200101−201231",
    },
    {
        type: "POSSION MODE 3",
        event_count: 25818,
        event_count2: 2976,
        range: "100716−120502 & 140101−151231 & 160514−160821 & 200101−201231",
    },
    {
        type: "POSSION MODE 4",
        event_count: 58696,
        event_count2: 1348,
        range: "100716−100731 & 150101−151231 & 180826−180903 & 200101−201231",
    },
    {
        type: "SNR MODE 1",
        event_count: 71628,
        event_count2: 2653,
        range: "100716−100911 & 140101−151231 & 160514−160821 & 180202−180317 & 190101−201231",
    },
    {
        type: "SNR MODE 2",
        event_count: 31702,
        event_count2: 1879,
        range: "140101−151231 & 190101−190410 & 200101−201231",
    },
    {
        type: "SNR MODE 3",
        event_count: 27477,
        event_count2: 2220,
        range: "140101−151231 & 160514−160821 & 200101−201231",
    },
    {
        type: "SNR MODE 4",
        event_count: 21114,
        event_count2: 1313,
        range: "100719−100812 & 150101−151231 & 200101−201231",
    },
    {
        type: "BAYESIAN MODE 1",
        event_count: 8768,
        event_count2: 2122,
        range: "111205−120426 & 131224−140222 & 140427−141003 & 160801−161007 & 171214−210130",
    },
    {
        type: "BAYESIAN MODE 2",
        event_count: 938,
        event_count2: 558,
        range: "140213−141209",
    },
    {
        type: "BAYESIAN MODE 3",
        event_count: "Not Searched Yet",
        event_count2: "-",
        range: "-",
    },
    {
        type: "BAYESIAN MODE 4",
        event_count: 0,
        event_count2: 4,
        range: "140427−140428",
    },
];

export default function GBMDatabase() {
    const theme = useTheme();

    return (
        <HeaderFooter>
            <Typography style={theme.h1}>
                GBM Transient Event Database
            </Typography>

            <Divider style={theme.divider}></Divider>

            <Typography
                mt={1}
                fontSize={"15px"}
                color={"gray"}
                fontWeight="bold">
                IMPORTANT: Database and this web interface are still under
                construction. Available databases are listed below. Click on the
                Search Type to access the database.
            </Typography>

            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection="column"
                m={3}>
                <TableContainer sx={{ width: "120%" }} component={Paper}>
                    <Table size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Search Type
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Number of Events Found
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Number Of GBM Triggered Events
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Searched Date Range (UTC; YYMMDD)
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {EVENT_DATA.map((data,index) => (
                                <TableRow key={`row_${index}`}>
                                    {Object.values(data).map((value,index2) => (
                                        <TableCell key={`cell_${index}_${index2}`}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </HeaderFooter>
    );
}
