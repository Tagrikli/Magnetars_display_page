import { colors, createTheme } from "@mui/material";
import * as color from "@mui/material/colors";


declare module "@mui/material/styles" {
    interface Theme {
        [key: string]: any
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        [key: string]: any;
    }
}


export const theme = createTheme({
    navi_button: {
        fontSize: '17px',
        color: colors.common.white,
        
    },
    divider: {
        height: "2px",
        backgroundColor: color.red[700],
        width: "100%",
    },
    h1: { fontSize: '30px' },
});