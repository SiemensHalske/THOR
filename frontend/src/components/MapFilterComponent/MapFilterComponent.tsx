// src/components/MapFilterComponent/MapFilterComponent.tsx

"use client";

import React from "react";
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Slider,
    Grid,
    SelectChangeEvent,
    Card,
    CardContent,
    CardHeader,
    Avatar,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import styles from "./MapFilterComponent.module.css";

const MapFilterComponent = () => {
    const [filter, setFilter] = React.useState<string>("");
    const [showAlerts, setShowAlerts] = React.useState<boolean>(false);
    const [showLightning, setShowLightning] = React.useState<boolean>(false);
    const [tempRange, setTempRange] = React.useState<number[]>([-25, 60]);
    const [humidityRange, setHumidityRange] = React.useState<number[]>([
        0, 100,
    ]);
    const [pressureRange, setPressureRange] = React.useState<number[]>([
        900, 1200,
    ]);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setFilter(event.target.value as string);
    };

    const handleTempChange = (event: Event, newValue: number | number[]) => {
        setTempRange(newValue as number[]);
    };

    const handleHumidityChange = (
        event: Event,
        newValue: number | number[]
    ) => {
        setHumidityRange(newValue as number[]);
    };

    const handlePressureChange = (
        event: Event,
        newValue: number | number[]
    ) => {
        setPressureRange(newValue as number[]);
    };

    return (
        <Box className={styles.filterContainer}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar>
                            <FilterListIcon />
                        </Avatar>
                    }
                    title="Map Filters"
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <FormControl
                                fullWidth
                                className={styles.formControl}
                            >
                                <InputLabel id="filter-label">
                                    Status
                                </InputLabel>
                                <Select
                                    labelId="filter-label"
                                    value={filter}
                                    onChange={handleChange}
                                    defaultValue="all"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="active">Active</MenuItem>
                                    <MenuItem value="inactive">
                                        Inactive
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => setShowAlerts(!showAlerts)}
                            >
                                Show only alerts
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => setShowLightning(!showLightning)}
                            >
                                Show Lightning Sensors
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography id="temp-slider" gutterBottom>
                                Temperature Range (°C)
                            </Typography>
                            <Slider
                                value={tempRange}
                                onChange={handleTempChange}
                                valueLabelDisplay="auto"
                                min={-20}
                                max={50}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography id="humidity-slider" gutterBottom>
                                Humidity Range (%)
                            </Typography>
                            <Slider
                                value={humidityRange}
                                onChange={handleHumidityChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography id="pressure-slider" gutterBottom>
                                Pressure Range (hPa)
                            </Typography>
                            <Slider
                                value={pressureRange}
                                onChange={handlePressureChange}
                                valueLabelDisplay="auto"
                                min={900}
                                max={1100}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant="body2">
                                Adjust the sliders to filter sensors based on
                                their temperature, humidity, and pressure
                                readings. Use the status dropdown to filter by
                                active or inactive sensors and the buttons to
                                show only alerts or lightning sensors.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MapFilterComponent;
