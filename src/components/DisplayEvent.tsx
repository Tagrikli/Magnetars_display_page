import React, { useState } from "react";
import SAMPLE from "../data/sample.json";
import SAMPLE_PDF from "/home/tagrikli/Desktop/Yuki/display_page/src/data/P1_100716044_8cha_1.pdf";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Paper,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Document, Page } from "react-pdf";
import { normalizeHeader } from "../utils";
import { Stack } from "@mui/system";
import PDFViewer from "./PDFViewer";
import { Margin } from "@mui/icons-material";
import HeaderFooter from "./HeaderFooter";

export default function DisplayEvent() {
    const [data, setData] = useState(SAMPLE as any);

    const { HDU0, HDU1, HDU3 } = data;
    let HDU1_ = JSON.parse(JSON.stringify(HDU1));
    delete HDU1_["SIGNIFICANCE"];

    const time = new Date(Date.parse(HDU0["TRIGUTC"]));

    const date = time.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const hour = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
    });
    const method = normalizeHeader(HDU0["METHOD"]);
    const mode = normalizeHeader(HDU0["MODE"]);

    return (
        <HeaderFooter>
            <Box
                margin={0}
                sx={{ backgroundColor: "white" }}
                borderRadius={1}
                padding={2}>
                <Typography fontSize={"x-large"} textAlign="center" margin={1}>
                    {method} - {mode} event on {date} at {hour}
                </Typography>
            </Box>

            <Stack
                padding={{ md: 10 }}
                direction={{ md: "row" }}
                justifyContent="space-between"
                minHeight="1000px"
                spacing={{ sm: 1, md: 6 }}>
                <Box flex={{ md: 1 }}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>General Data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer>
                                <Table>
                                    <TableHead></TableHead>
                                    <TableBody component={"tbody"}>
                                        {Object.entries(HDU0).map(
                                            ([header, value], index) => {
                                                return (
                                                    <TableRow
                                                        component="tr"
                                                        key={index + "HDU0"}>
                                                        <TableCell component="td">
                                                            {normalizeHeader(
                                                                header
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {value as string}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Event Data
                        </AccordionSummary>

                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}>
                                    {normalizeHeader("Significances")}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Table>
                                        <TableBody>
                                            {(
                                                HDU1["SIGNIFICANCE"] as string[]
                                            ).map(
                                                (
                                                    sig: string,
                                                    index: number
                                                ) => {
                                                    return (
                                                        <TableRow
                                                            component="tr"
                                                            key={index + "SIG"}>
                                                            <TableCell>
                                                                {`SIG_${
                                                                    index + 1
                                                                }`}
                                                            </TableCell>
                                                            <TableCell>
                                                                {sig}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                }
                                            )}
                                        </TableBody>
                                    </Table>
                                </AccordionDetails>
                            </Accordion>

                            <TableContainer>
                                <Table component="table">
                                    <TableBody component="tbody">
                                        {Object.entries(HDU1_).map(
                                            ([header, value], index) => {
                                                return (
                                                    <TableRow
                                                        key={index + "HDU1"}>
                                                        <TableCell component="td">
                                                            {normalizeHeader(
                                                                header
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {value as string}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Event Probabilities
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        {Object.entries(HDU3).map(
                                            ([header, value], index) => {
                                                return (
                                                    <TableRow
                                                        key={index + "HDU3"}>
                                                        <TableCell>
                                                            {normalizeHeader(
                                                                header
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {value as string}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box flex={{ md: 4 }} height={"1200px"}>
                    <PDFViewer file={SAMPLE_PDF}></PDFViewer>
                </Box>
            </Stack>
        </HeaderFooter>
    );
}
