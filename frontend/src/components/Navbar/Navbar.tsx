// src/components/Navbar/Navbar.tsx

import * as React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Navbar.module.css";

interface NavbarProps {
    themeMode: "light" | "dark";
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ themeMode, toggleTheme }) => {
    return (
        <AppBar
            position="static"
            className={clsx(styles.navbar, {
                "light-mode": themeMode === "light",
            })}
        >
            <Toolbar>
                <Link href="/" passHref legacyBehavior>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Image
                            src="/thor-logo.webp"
                            alt="THOR Logo"
                            width={40}
                            height={40}
                        />
                    </IconButton>
                </Link>
                <Link href="/" passHref legacyBehavior>
                    <Typography
                        variant="h6"
                        component="a"
                        sx={{
                            flexGrow: 1,
                            marginLeft: 2,
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        THOR
                    </Typography>
                </Link>
                <div className={styles.links}>
                    <Link href="/" passHref legacyBehavior>
                        <Button color="inherit" component="a">
                            Home
                        </Button>
                    </Link>
                    <Link href="/about" passHref legacyBehavior>
                        <Button color="inherit" component="a">
                            About
                        </Button>
                    </Link>
                    <Link href="/contact" passHref legacyBehavior>
                        <Button color="inherit" component="a">
                            Contact
                        </Button>
                    </Link>
                    <Link href="/dashboard" passHref legacyBehavior>
                        <Button color="inherit" component="a">
                            Dashboard
                        </Button>
                    </Link>
                </div>
                <IconButton edge="end" color="inherit" onClick={toggleTheme}>
                    {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
