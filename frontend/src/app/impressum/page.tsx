"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./impressum.module.css";

const ImpressumPage = () => {
    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                Impressum
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>Hendrik Siemens</strong>
                <br />
                Bluddenstraße 5
                <br />
                59329 Wadersloh
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>Kontakt</strong>
                <br />
                Telefon: 01725272889
                <br />
                E-Mail: hendriksiemens1( at )gmail.com
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>Redaktionell verantwortlich</strong>
                <br />
                Hendrik Siemens
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </strong>
                <br />
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>
                    Zentrale Kontaktstelle nach dem Digital Services Act - DSA
                    (Verordnung (EU) 2022/265)
                </strong>
                <br />
                Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art.
                11, 12 DSA erreichen Sie wie folgt:
                <br />
                E-Mail: hendriksiemens1( at )gmail.com
                <br />
                Telefon: 015126597476
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                <strong>Sonstige Kontaktwege:</strong>
                <br />
                github.com/SiemensHalske
            </Typography>
            <Typography variant="body1" className={styles.paragraph}>
                Die für den Kontakt zur Verfügung stehenden Sprachen sind:
                Deutsch, Englisch, Sarkastisch.
            </Typography>
        </Box>
    );
};

export default ImpressumPage;
