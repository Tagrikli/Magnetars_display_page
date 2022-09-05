import { useTheme } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import HeaderFooter from "./HeaderFooter";

export default function GBMSearch() {

    const theme = useTheme();

    return (
        <HeaderFooter>
            <Typography style={theme.h1}>GBM Database Search</Typography>
            <Divider style={theme.divider} />
        </HeaderFooter>
    );
}
