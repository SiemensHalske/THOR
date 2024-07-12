"use client";
import React, { useState } from "react";
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
    Paper,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    SelectChangeEvent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./LatexTutorial.module.css";

const LatexTutorial: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [mainFile, setMainFile] = useState<string>("");

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setUploadedFiles([...uploadedFiles, ...Array.from(event.target.files)]);
        }
    };

    const handleMainFileChange = (event: SelectChangeEvent<string>) => {
        setMainFile(event.target.value as string);
    };

    const handleCompile = () => {
        // Implement the compilation logic here, possibly by sending a request to a backend server.
        alert(`Compiling ${mainFile}`);
    };

    return (
        <Container maxWidth="lg" className={styles.container}>
            <div className={styles.tutorial}>
                <Typography variant="h3" gutterBottom>
                    Einführung in LaTeX
                </Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">1. Was ist LaTeX?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            LaTeX ist ein Satzsystem, das sich besonders für
                            wissenschaftliche Texte eignet. Es basiert auf dem
                            TeX-Programm, das von Donald Knuth entwickelt wurde.
                            LaTeX vereinfacht viele Aspekte des Textsatzes, wie zum
                            Beispiel das Einfügen von mathematischen Formeln,
                            Tabellen und Referenzen.
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">
                                    1.1 Geschichte von LaTeX
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    LaTeX wurde in den 1980er Jahren von Leslie
                                    Lamport entwickelt, um die Verwendung des
                                    TeX-Systems zu vereinfachen.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">
                                    1.2 Vorteile von LaTeX
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    LaTeX bietet zahlreiche Vorteile, darunter
                                    präzises Typografie-Management, einfache
                                    Integration von mathematischen Formeln und
                                    automatisierte Inhaltsverzeichnisse.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">2. Erste Schritte</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Um ein LaTeX-Dokument zu erstellen, benötigst du eine
                            LaTeX-Distribution (z.B. TeX Live oder MiKTeX) und einen
                            Editor (z.B. TeXstudio oder Overleaf).
                        </Typography>
                        <Typography>
                            Ein einfaches LaTeX-Dokument hat folgende Grundstruktur:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\documentclass[a4paper,11pt]{article}
\\usepackage[utf8]{inputenc}

\\title{Titel des Dokuments}
\\author{Dein Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Einleitung}
Hier beginnt dein Text.

\\end{document}
        `}
                            </pre>
                        </Paper>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">
                                    2.1 Installation
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Um LaTeX lokal zu installieren, lade eine
                                    LaTeX-Distribution wie TeX Live oder MiKTeX
                                    herunter und folge den Installationsanweisungen.
                                    Danach kannst du einen LaTeX-Editor wie
                                    TeXstudio verwenden, um deine Dokumente zu
                                    erstellen.
                                </Typography>
                                <Typography>
                                    Alternativ kannst du auch Overleaf, einen
                                    Online-LaTeX-Editor, verwenden, der keine lokale
                                    Installation erfordert.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">
                                    2.2 Grundstruktur eines Dokuments
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Die Grundstruktur eines LaTeX-Dokuments besteht
                                    aus einer Dokumentklasse, der Präambel und dem
                                    Hauptteil des Dokuments. Hier ein Beispiel:
                                </Typography>
                                <Paper variant="outlined" className={styles.code}>
                                    <pre>
                                        {`
\\documentclass[a4paper,11pt]{article}
\\usepackage[utf8]{inputenc}

\\title{Titel des Dokuments}
\\author{Dein Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Einleitung}
Hier beginnt dein Text.

\\end{document}
            `}
                                    </pre>
                                </Paper>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">
                                    2.3 Häufige Fehler und deren Behebung
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Beim Arbeiten mit LaTeX können verschiedene
                                    Fehler auftreten. Hier sind einige häufige
                                    Fehler und deren Behebung:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Fehler: Fehlendes schließendes }"
                                            secondary="Behebung: Überprüfe alle geöffneten und geschlossenen Klammern."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Fehler: Ungültiges Zeichen im Dokument"
                                            secondary="Behebung: Achte darauf, dass alle Zeichen im UTF-8-Format vorliegen."
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">3. Pakete</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Pakete erweitern die Funktionalität von LaTeX. Einige
                            häufig verwendete Pakete sind:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="amsmath, amssymb: für erweiterte mathematische Symbole und Umgebungen" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="graphicx: zum Einfügen von Bildern" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="hyperref: für Hyperlinks und PDF-Bookmarks" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="babel: für die Unterstützung verschiedener Sprachen" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">
                            4. Mathematische Formeln
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">Inline-Formeln</Typography>
                        <Typography>
                            Inline-Formeln werden mit <code>\$ ... \$</code>{" "}
                            eingefügt, z.B. <code>{`E = mc^2`}</code>.
                        </Typography>
                        <Typography variant="h6">Abgesetzte Formeln</Typography>
                        <Typography>
                            Abgesetzte Formeln stehen in einer eigenen Zeile und
                            werden mit{" "}
                            <code>{`\\begin{equation} ... \\end{equation}`}</code>{" "}
                            erstellt:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\begin{equation}
a^2 + b^2 = c^2
\\end{equation}
              `}
                            </pre>
                        </Paper>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">5. Tabellen</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tabellen werden mit der <code>tabular</code>-Umgebung
                            erstellt:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\begin{table}[h]
\\centering
\\begin{tabular}{|c|c|c|}
\\hline
Spalte 1 & Spalte 2 & Spalte 3 \\\\
\\hline
Inhalt 1 & Inhalt 2 & Inhalt 3 \\\\
\\hline
\\end{tabular}
\\caption{Eine einfache Tabelle}
\\end{table}
              `}
                            </pre>
                        </Paper>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">6. Bilder einfügen</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Um Bilder in LaTeX einzufügen, verwendet man das{" "}
                            <code>graphicx</code>-Paket und die{" "}
                            <code>includegraphics</code>-Umgebung:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\usepackage{graphicx}

\\begin{figure}[h]
\\centering
\\includegraphics[width=0.5\\textwidth]{example-image}
\\caption{Ein Beispielbild}
\\end{figure}
              `}
                            </pre>
                        </Paper>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">
                            7. Referenzen und Zitate
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            LaTeX bietet leistungsstarke Mechanismen zur Erstellung
                            von Referenzen und Zitaten. Mit dem{" "}
                            <code>biblatex</code>-Paket kann man eine Bibliographie
                            erstellen:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\usepackage[backend=biber,style=numeric]{biblatex}
\\addbibresource{literatur.bib}

\\begin{document}

Ein Zitat aus einer Quelle \\cite{key}.

\\printbibliography

\\end{document}
              `}
                            </pre>
                        </Paper>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">
                            8. Formatierung und Layout
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            LaTeX ermöglicht die Anpassung von Formatierung und
                            Layout. Mit dem <code>geometry</code>-Paket kann man
                            Seitengröße und Ränder definieren:
                        </Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\usepackage{geometry}
\\geometry{a4paper, top=25mm, left=20mm, right=20mm, bottom=25mm}
              `}
                            </pre>
                        </Paper>
                        <Typography>
                            Um Text zu formatieren, kann man verschiedene Befehle
                            verwenden:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="\\textbf{Fett}" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="\\textit{Kursiv}" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="\\underline{Unterstrichen}" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">9. Listen</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Listen können mit verschiedenen Umgebungen erstellt
                            werden:
                        </Typography>
                        <Typography variant="h6">Aufzählung:</Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\begin{itemize}
  \\item Erstes Element
  \\item Zweites Element
  \\item Drittes Element
\\end{itemize}
              `}
                            </pre>
                        </Paper>
                        <Typography variant="h6">Nummerierte Liste:</Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\begin{enumerate}
  \\item Erstes Element
  \\item Zweites Element
  \\item Drittes Element
\\end{enumerate}
              `}
                            </pre>
                        </Paper>
                        <Typography variant="h6">Beschreibungsliste:</Typography>
                        <Paper variant="outlined" className={styles.code}>
                            <pre>
                                {`
\\begin{description}
  \\item[Erstes Element] Beschreibung des ersten Elements.
  \\item[Zweites Element] Beschreibung des zweiten Elements.
\\end{description}
              `}
                            </pre>
                        </Paper>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className={styles.compile}>
                <Typography variant="h4" gutterBottom>
                    Dateien hochladen
                </Typography>
                <input
                    accept=".tex,.pdf,.png,.jpg,.jpeg,.svg"
                    style={{ display: "none" }}
                    id="upload-file"
                    multiple
                    type="file"
                    onChange={handleFileUpload}
                />
                <label htmlFor="upload-file">
                    <Button variant="contained" color="primary" component="span">
                        Datei auswählen
                    </Button>
                </label>
                <Typography variant="h5" gutterBottom>
                    Hochgeladene Dateien
                </Typography>
                <List>
                    {uploadedFiles.map((file, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={file.name} />
                        </ListItem>
                    ))}
                </List>

                <Typography variant="h4" gutterBottom>
                    PDF kompilieren
                </Typography>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="main-file-label">Hauptdatei auswählen</InputLabel>
                    <Select
                        labelId="main-file-label"
                        value={mainFile}
                        onChange={handleMainFileChange}
                    >
                        {uploadedFiles
                            .filter((file) => file.name.endsWith(".tex"))
                            .map((file, index) => (
                                <MenuItem key={index} value={file.name}>
                                    {file.name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCompile}
                    disabled={!mainFile}
                >
                    Kompilieren
                </Button>
            </div>
        </Container>
    );
};

export default LatexTutorial;
