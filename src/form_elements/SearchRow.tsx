import { IconButton, Input, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type PSearchRow = {
    id: string;
    label: string;
    min: any;
    max: any;
    onChange: any;
    onDelete: any;
};

export default function SearchRow({
    id,
    label,
    min,
    max,
    onChange,
    onDelete,
}: PSearchRow) {
    return (
        <TableRow key={id}>
            <TableCell>{label}</TableCell>
            <TableCell width={"200px"}>
                <Input type="text" sx={{ width: "100%" }} id="outlined-basic" />
            </TableCell>{" "}
            <TableCell width={"200px"}>
                <Input type="text" sx={{ width: "100%" }} id="outlined-basic" />
            </TableCell>
            <TableCell align="right">{min !== undefined ? min : ""}</TableCell>
            <TableCell align="right">{max !== undefined ? max : ""}</TableCell>
        </TableRow>
    );
}
