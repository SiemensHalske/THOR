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
    Box,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Login.module.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted"); // Debugging-Ausgabe
        try {
            const response = await axios.post(
                "http://localhost:5000/auth/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true, // WICHTIG: Damit Cookies gesendet werden
                }
            );

            // Debugging-Ausgabe
            console.log("Response Headers:", response.headers);

            if (response.status === 200) {
                router.push("/profile");
            }
        } catch (err) {
            setError("Invalid email or password");
            console.error("Error during login request:", err); // Debugging-Ausgabe
        }
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
                            {error && (
                                <Typography
                                    color="error"
                                    className={styles.error}
                                >
                                    {error}
                                </Typography>
                            )}
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
                        <Box mt={2} display="flex" justifyContent="center">
                            <Typography>
                                Not registered?{" "}
                                <Link href="/register">Sign up here</Link>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default LoginPage;
