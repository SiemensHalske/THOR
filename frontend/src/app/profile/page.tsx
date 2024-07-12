"use client";

import * as React from "react";
import {
    Container,
    Typography,
    Avatar,
    Box,
    Grid,
    Paper,
    Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import styles from "./profile.module.css";

const ProfileContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    textAlign: "center",
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
}));

const ProfileCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

const ProfilePage: React.FC = () => {
    return (
        <ProfileContainer maxWidth="md">
            <ProfileAvatar alt="Profile Picture" src="/profile-pic.jpg" />
            <Typography variant="h4" className={styles.profileName}>
                John Doe
            </Typography>
            <Typography variant="h6" className={styles.profileTitle}>
                Software Engineer
            </Typography>
            <Box mt={5}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Link href="/profile/edit-profile" passHref>
                            <ProfileCard elevation={3}>
                                <Typography variant="h6">
                                    Edit Profile
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={styles.cardDescription}
                                >
                                    Update your personal information and profile
                                    picture.
                                </Typography>
                            </ProfileCard>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="/profile/account-settings" passHref>
                            <ProfileCard elevation={3}>
                                <Typography variant="h6">
                                    Account Settings
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={styles.cardDescription}
                                >
                                    Manage your account settings and password.
                                </Typography>
                            </ProfileCard>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="/profile/notification-settings" passHref>
                            <ProfileCard elevation={3}>
                                <Typography variant="h6">
                                    Notification Settings
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={styles.cardDescription}
                                >
                                    Customize your notification preferences.
                                </Typography>
                            </ProfileCard>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="/profile/security-settings" passHref>
                            <ProfileCard elevation={3}>
                                <Typography variant="h6">
                                    Security Settings
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className={styles.cardDescription}
                                >
                                    Enhance the security of your account.
                                </Typography>
                            </ProfileCard>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </ProfileContainer>
    );
};

export default ProfilePage;
