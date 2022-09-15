import { TableCell, TableRow } from "@mui/material";

export default function SearchRowHead() {
    return (
        <TableRow>
            <TableCell sx={{fontWeight:'bold'}}  >Field Name</TableCell>
            <TableCell sx={{fontWeight:'bold'}} width={"200px"} align='center'>{'≤'}</TableCell>
            <TableCell sx={{fontWeight:'bold'}} width={"200px"} align='center'>{'≥'}</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Min Value</TableCell>
            <TableCell sx={{fontWeight:'bold'}} align="right">Max Value</TableCell>
        </TableRow>
    );
}
