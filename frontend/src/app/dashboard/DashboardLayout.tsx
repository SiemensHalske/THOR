// src/app/dashboard/DashboardLayout.tsx

import React from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Container maxWidth={false} disableGutters className={styles.container}>
            <Box className={styles.main}>
                <Box className={styles.content}>{children}</Box>
            </Box>
        </Container>
    );
};

export default DashboardLayout;
