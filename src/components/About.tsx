import { useTheme } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import HeaderFooter from "./HeaderFooter";

export default function About() {
    const theme = useTheme() as any;

    return (
        <HeaderFooter>
            <Typography style={theme.h1}>About</Typography>

            <Divider style={theme.divider} />

            <Typography mt={1} fontSize='16px'>
                This database and web page have been created as a part of the
                project funded by the Scientific and Technological Council of
                Turkey (TUBITAK; 118F344), and are managed by the name of the
                research group at Sabanci University.
            </Typography>

            <Typography mt={2} fontSize='16px'>
                The database is open to public use but please reference the
                website URL (http://magnetars.sabanciuniv.edu/).
            </Typography>
        </HeaderFooter>
    );
}
