// src/components/ApiDocumentation.tsx
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Typography, Box } from "@mui/material";
import styles from "./ApiDocumentation.module.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });
import "swagger-ui-react/swagger-ui.css";

const ApiDocumentation = () => {
    const [spec, setSpec] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpec = async () => {
            try {
                const response = await fetch("/openapi.yaml");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const yamlText = await response.text();
                setSpec(yamlText);
            } catch (error) {
                console.error("Failed to fetch spec:", error);
            }
        };

        fetchSpec();
    }, []);

    return (
        <Container className={styles.container}>
            <Typography variant="h4" className={styles.header} gutterBottom>
                API Documentation
            </Typography>
            <Box mt={4}>
                {spec ? <SwaggerUI spec={spec} /> : <p>Loading...</p>}
            </Box>
        </Container>
    );
};

export default ApiDocumentation;
