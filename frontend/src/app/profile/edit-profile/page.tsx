"use client";

import * as React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
    Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./edit-profile.module.css";

const EditProfileContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
    marginBottom: theme.spacing(2),
}));

const EditProfilePage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <EditProfileContainer maxWidth="sm">
            <Typography variant="h4" className={styles.pageTitle}>
                Edit Profile
            </Typography>
            <Box textAlign="center">
                <ProfileAvatar alt="Profile Picture" src="/profile-pic.jpg" />
                <Button variant="contained" component="label">
                    Change Avatar
                    <input type="file" hidden />
                </Button>
            </Box>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Full Name"
                            defaultValue="John Doe"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Email Address"
                            defaultValue="johndoe@example.com"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Phone Number"
                            defaultValue="+123 456 7890"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Bio"
                            multiline
                            rows={4}
                            defaultValue="Hello! I'm John Doe, a passionate Software Engineer with over 5 years of experience in web development."
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
        </EditProfileContainer>
    );
};

export default EditProfilePage;
