"use client";

import React, { useState } from "react";
import Head from "next/head";
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Box,
} from "@mui/material";
import styles from "./Login.module.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the login logic here
        console.log("Login submitted:", { email, password });
    };

    return (
        <>
            <Head>
                <title>Login - THOR</title>
                <meta
                    name="description"
                    content="Login to the THOR dashboard"
                />
            </Head>
            <Container maxWidth="sm" className={styles.container}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h4" className={styles.title}>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                className={styles.textField}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                className={styles.textField}
                            />
                            <Box mt={2} display="flex" justifyContent="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={styles.loginButton}
                                >
                                    Login
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default LoginPage;
