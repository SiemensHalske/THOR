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
    Button,
} from "@mui/material";
import {
    Brightness4,
    Brightness7,
    Menu,
    Home as HomeIcon,
    Info as InfoIcon,
    ContactMail as ContactIcon,
    Dashboard as DashboardIcon,
    AccountCircle as ProfileIcon,
    ExitToApp as LogoutIcon,
    Login as LoginIcon,
} from "@mui/icons-material";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import { useAuth } from "../../context/authContext"; // Importiere den useAuth Hook

interface NavbarProps {
    themeMode: "light" | "dark";
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ themeMode, toggleTheme }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const { isLoggedIn, logout } = useAuth(); // Nutze den Auth-Kontext
    const router = useRouter();

    React.useEffect(() => {
        console.log(`Navbar: isLoggedIn = ${isLoggedIn}`);
    }, [isLoggedIn]);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

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
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/about">
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a" href="/contact">
                    <ListItemIcon>
                        <ContactIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component="a" href="/dashboard">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </List>
            <Divider />
            <List>
                {isLoggedIn ? (
                    <>
                        <ListItem button component="a" href="/profile">
                            <ListItemIcon>
                                <ProfileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem button onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </>
                ) : (
                    <ListItem button component="a" href="/login">
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                )}
            </List>
            <List>
                <ListItem
                    button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                >
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
