"use client";

import * as React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./account-settings.module.css";

const AccountSettingsContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

const AccountSettingsPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <AccountSettingsContainer maxWidth="sm">
            <Typography variant="h4" className={styles.pageTitle}>
                Account Settings
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Username"
                            defaultValue="johndoe"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Current Password"
                            type="password"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="New Password"
                            type="password"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Confirm New Password"
                            type="password"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </AccountSettingsContainer>
    );
};

export default AccountSettingsPage;
