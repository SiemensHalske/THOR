import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Box,
} from "@mui/material";
import {
    Brightness4,
    Brightness7,
    Menu,
    AccountCircle,
} from "@mui/icons-material";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Navbar.module.css";

interface NavbarProps {
    themeMode: "light" | "dark";
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ themeMode, toggleTheme }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setDrawerOpen(open);
        };

    const drawerList = () => (
        <Box
            className={clsx(styles.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box className={styles.logoContainer}>
                <Link href="/" passHref legacyBehavior>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        className={styles.logoButton}
                    >
                        <Image
                            src="/thor-logo.webp"
                            alt="THOR Logo"
                            layout="fixed"
                            width={150}
                            height={150}
                        />
                    </IconButton>
                </Link>
            </Box>
            <List>
                <ListItem button component="a" href="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a" href="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component="a" href="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={toggleTheme}>
                    <ListItemIcon>
                        {themeMode === "dark" ? (
                            <Brightness7 />
                        ) : (
                            <Brightness4 />
                        )}
                    </ListItemIcon>
                    <ListItemText primary="Toggle Theme" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                className={clsx(styles.navbar, {
                    "light-mode": themeMode === "light",
                })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        THOR
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="user"
                        component="a"
                        href="/profile"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerList()}
            </Drawer>
        </>
    );
};

export default Navbar;
