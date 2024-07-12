"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import styles from "./page.module.css";
import { hydrantCoordinates } from "./hydrantcoordinates";
import { lineCoordinates } from "./linecoordinates";
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TuneIcon from "@mui/icons-material/Tune";
import LandscapeIcon from "@mui/icons-material/Landscape";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CancelIcon from "@mui/icons-material/Cancel";

const Page: React.FC = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const [selectedHydrant, setSelectedHydrant] = useState<any>(null);

    useEffect(() => {
        import("leaflet").then((L) => {
            if (mapContainerRef.current && !mapRef.current) {
                const map = L.map(mapContainerRef.current).setView(
                    [51.74169461, 8.256769509],
                    13
                );

                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }
                ).addTo(map);

                const customIcon = L.icon({
                    iconUrl: "/marker-icon2.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 25],
                    shadowSize: [41, 41],
                    iconAnchor: [12, 41],
                    shadowAnchor: [12, 41],
                    popupAnchor: [1, -34],
                });

                // Schritt 1: Erstelle eine Karte (Graph) der Verbindungen
                const connections: { [key: string]: number } = {};

                lineCoordinates.forEach((line) => {
                    line.forEach((point) => {
                        const key = `${point[0]},${point[1]}`;
                        connections[key] = (connections[key] || 0) + 1;
                    });
                });

                // Schritt 2: Erkenne Knoten mit nur einer Verbindung
                const endPoints = new Set<string>();
                for (const [key, count] of Object.entries(connections)) {
                    if (count === 1) {
                        endPoints.add(key);
                    }
                }

                // Schritt 3: Färbung basierend auf diesen Informationen
                const linesLayer = L.layerGroup();
                lineCoordinates.forEach((line) => {
                    const start = `${line[0][0]},${line[0][1]}`;
                    const end = `${line[line.length - 1][0]},${
                        line[line.length - 1][1]
                    }`;
                    const isEndPoint =
                        endPoints.has(start) || endPoints.has(end);
                    const color = isEndPoint ? "red" : "blue";

                    const latlngs = line.map(
                        (point) => [point[1], point[0]] as [number, number]
                    );
                    L.polyline(latlngs, { color }).addTo(linesLayer);
                });
                linesLayer.addTo(map);

                // Layer für Marker
                const markersLayer = L.layerGroup();
                hydrantCoordinates.forEach((hydrant) => {
                    L.marker([hydrant.lat, hydrant.lng], { icon: customIcon })
                        .on("click", () => {
                            console.log("Hydrant clicked:", hydrant);
                            setSelectedHydrant(hydrant);
                        })
                        .addTo(markersLayer);
                });
                markersLayer.addTo(map);

                mapRef.current = map;
            }
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        console.log("Selected Hydrant updated:", selectedHydrant);
    }, [selectedHydrant]);

    return (
        <Box className={styles.container} display="flex">
            <Box className={styles.mapContainer} ref={mapContainerRef}></Box>
            <Box className={styles.infoPanel}>
                <Typography variant="h6">Hydranteninformationen</Typography>
                {selectedHydrant ? (
                    <Card className={styles.infoCard}>
                        <CardContent>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <HomeIcon />
                                            </TableCell>
                                            <TableCell>{`Hausnummer: ${
                                                selectedHydrant.houseNumber ||
                                                "Unbekannt"
                                            }`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <LocationOnIcon />
                                            </TableCell>
                                            <TableCell>{`Lage des Hydranten: ${
                                                selectedHydrant.location ||
                                                "Unbekannt"
                                            }`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <TuneIcon />
                                            </TableCell>
                                            <TableCell>{`Nennweite LA DN [mm]: ${
                                                selectedHydrant.diameter ||
                                                "Unbekannt"
                                            }`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                {selectedHydrant.shutoffValve ? (
                                                    <WaterDropIcon />
                                                ) : (
                                                    <CancelIcon />
                                                )}
                                            </TableCell>
                                            <TableCell>{`Vorschieber: ${
                                                selectedHydrant.shutoffValve
                                                    ? "Ja"
                                                    : "Nein"
                                            }`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <LandscapeIcon />
                                            </TableCell>
                                            <TableCell>{`Oberfläche: ${
                                                selectedHydrant.surface ||
                                                "Unbekannt"
                                            }`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <GpsFixedIcon />
                                            </TableCell>
                                            <TableCell>{`Longitude: ${selectedHydrant.lng}`}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <GpsFixedIcon />
                                            </TableCell>
                                            <TableCell>{`Latitude: ${selectedHydrant.lat}`}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                ) : (
                    <Typography>
                        Klicken Sie auf einen Hydranten, um Informationen
                        anzuzeigen.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
