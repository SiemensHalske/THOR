// src/app/layout.tsx

"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../assets/styles/globals.css";
import { ReactNode, useState, useMemo } from "react";
import { Provider } from "react-redux";
import store from "./store";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode,
                },
            }),
        [themeMode]
    );

    return (
        <>
            <html
                lang="en"
                className={themeMode === "light" ? "light-mode" : ""}
            >
                <body
                    style={{
                        backgroundImage: `url(/thor-bg.webp)`,
                    }}
                >
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Navbar
                                themeMode={themeMode}
                                toggleTheme={toggleTheme}
                            />
                            <main>{children}</main>
                            <Footer />
                        </ThemeProvider>
                    </Provider>
                </body>
            </html>
        </>
    );
};

export default Layout;
