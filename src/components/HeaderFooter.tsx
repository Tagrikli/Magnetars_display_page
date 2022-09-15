import {
    AppBar,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";

import { Box, Container, Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

type TProps = {
    children: any;
};

export default function HeaderFooter(props: TProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navItems = [
        { text: "Homepage", icon: <HomeIcon />, id: "" },
        { text: "GBM Database", icon: <StorageIcon />, id: "database" },
        { text: "GBM Search", icon: <SearchIcon />, id: "search" },
        { text: "About", icon: <InfoIcon />, id: "about" },
    ];

    const theme = useTheme();
    const navigate = useNavigate();

    const onNavi = (id: string) => {
        navigate(`/${id}`, { replace: false });
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const container = window !== undefined ? () => document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Magnetars
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={`list_item_${index}`} disablePadding>
                        <ListItemButton sx={{ textAlign: "start" }} onClick={()=>onNavi(item['id'])}>
                            <ListItemIcon>{item["icon"]}</ListItemIcon>
                            <ListItemText primary={item["text"]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ display: { md: "block" } }}>
                <Container>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Container>
                <Container sx={{ display: { xs: "none", sm: "block" } }}>
                    <Stack direction={"row"} spacing={2}>
                        {navItems.map((item, index) => (
                            <Button
                                onClick={()=>onNavi(item['id'])}
                                key={`nav_button_${index}`}
                                startIcon={item["icon"]}
                                sx={{ color: "#fff" }}>
                                {item["text"]}
                            </Button>
                        ))}
                    </Stack>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 240,
                        },
                    }}>
                    {drawer}
                </Drawer>
            </Box>

            <Box m={{sm:6}} mt={{xs:3}} mb={{xs:5}}>
                <Container maxWidth="lg" >{props.children}</Container>
            </Box>

            <AppBar
                sx={{
                    bottom: "0",
                    top: "auto",
                }}
                position="fixed">
                <Container>
                    <Stack
                        m={0.7}
                        direction={"row"}
                        justifyContent="space-between">
                        <Typography color="inherit" fontSize={"small"}>
                            Contact:
                            <Typography
                                fontSize={"small"}
                                color="white"
                                component="a"
                                href="mail://yuki@sabanciuniv.edu">
                                yuki@sabanicuniv.edu
                            </Typography>
                        </Typography>
                        <Typography
                            color="white"
                            fontSize="small"
                            component="a"
                            href="https://sabanciuniv.edu">
                            Sabancı University
                        </Typography>
                        <Typography fontSize="small" display={{xs:'none',sm:'inline'}}>
                            Last Updated: Aug 23, 2022
                        </Typography>
                    </Stack>
                </Container>
            </AppBar>
        </>
    );
}
