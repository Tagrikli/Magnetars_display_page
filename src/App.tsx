import { Box, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import GBMDatabase from "./components/GBMDatabase";
import GBMSearch from "./components/GBMSearch";
import { theme } from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Routes>
                    <Route path="gbm/" element={<HomePage />} />
                    <Route path="gbm/database" element={<GBMDatabase />} />
                    <Route path="gbm/search" element={<GBMSearch />} />
                    <Route path="gbm/about" element={<About />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
}
