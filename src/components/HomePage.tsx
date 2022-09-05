import {
    AppBar,
    Box,
    Button,
    Divider,
    ListItemSecondaryAction,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import HeaderFooter from "./HeaderFooter";

export default function HomePage() {
    const theme = useTheme();

    return (
        <HeaderFooter>
            <Box mb={4}>
                <Typography fontSize={"20px"} fontWeight="bold">
                    Deep Search for and Investigations of Untriggered Gamma-Ray
                    Transient Events Using Fermi/GBM Data
                </Typography>

                <Typography fontSize={"15px"}>
                    (Fermi/GBM Verileri ile Tetiklememiş Geçici Gama Işını
                    Olaylarının Derinlemesine Araştırılması ve İncelenmesi)
                </Typography>

                <Typography fontSize={"15px"} color={"gray"} fontWeight="bold">
                    A project funded by TÜBİTAK (118F344)
                </Typography>

                <Typography mt={5} style={theme.h1}>
                    Fermi/GBM Transient Event Catalog
                </Typography>
                <Divider style={theme.divider} />
                
                <Typography mt={1} fontSize={"16px"}>
                    This catalog lists the results of our searches for
                    untriggered transient events using the 10-years of data
                    collected with Gamma-ray Burst Monitors (GBM) on board the
                    Fermi Gamma-ray Space Telescope. The searches are done using
                    the high resolution Continuous Time-Tagged Event (CTTE)
                    data, which became available in October 2010.
                </Typography>

                <Typography mt={5} fontWeight={"bold"} fontSize={"16px"}>
                    Search Methods:
                </Typography>
                <Typography fontSize="15px">
                    We used the following three independent statistical methods
                    to identify transient events:
                </Typography>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection="column"
                    m={2}>
                    <TableContainer component={Paper} sx={{ width: {sm:"70%"} }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Method
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Criteria for Event Detection
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Signal to Noise Ratio (SNR)
                                    </TableCell>
                                    <TableCell>
                                        {">4.5𝜎 above the background level"}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        {"Poisson statistics (Poisson)"}
                                    </TableCell>
                                    <TableCell>
                                        {"Poisson probability <10−4"}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Bayesian Blocks (Bayesian)
                                    </TableCell>
                                    <TableCell>
                                        Any blocks above the estimated
                                        background level *
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography fontSize={"14px"} m={1}>
                        * “Event” blocks are identified based on a pre-defined
                        duration that depends on the search Mode (see below)
                    </Typography>
                </Box>

                <Typography mt={5} fontSize={"15px"}>
                    For each of the method, the search was done in the following
                    four energy-time modes:
                </Typography>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection="column"
                    m={2}>
                    <TableContainer component={Paper} sx={{ width: { sm: "70%" } }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Mode
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Targeted Event Types
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Time Resolution (ms)
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        Energy Range (keV)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>SGR</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>10 - 100</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        {"Long GRB & Short Transients (<10 s)"}
                                    </TableCell>
                                    <TableCell>512</TableCell>
                                    <TableCell>10 - 300</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>Short GRB & TGF</TableCell>
                                    <TableCell>16</TableCell>
                                    <TableCell>50 – 1000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        {"Long Transients (>10 s) & SFL"}
                                    </TableCell>
                                    <TableCell>2048</TableCell>
                                    <TableCell>10 - 25</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography fontSize={"14px"} m={1}>
                        * “Event” blocks are identified based on a pre-defined
                        duration that depends on the search Mode (see below)
                    </Typography>
                </Box>

                <Typography fontWeight={"bold"} fontSize={"16px"}>
                    Classification Methods:
                </Typography>
                <Typography fontSize={"15px"} mb={1}>
                    For each of the transient events identified in the search,
                    we calculated the likelihood probability for each known
                    event class, namely, SGR, GRB, TGF, SFL, particle event
                    (PAR), transients (TRN), and unknown (UKN), based on the
                    properties of the GBM triggered events in each event class.
                </Typography>
            </Box>
        </HeaderFooter>
    );
}
