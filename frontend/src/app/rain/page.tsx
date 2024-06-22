// pages/RadarPage.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import styles from "./RadarPage.module.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const fetchWeatherApi = async (url: string, params: any) => {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

const RadarPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [latitude, setLatitude] = useState<string>("51.73929");
    const [longitude, setLongitude] = useState<string>("8.2509");

    const fetchRadarData = useCallback(async () => {
        try {
            const params = {
                latitude,
                longitude,
                hourly: "rain,windspeed_10m,winddirection_10m",
            };
            const url = "https://api.open-meteo.com/v1/forecast";
            console.log("Fetching data with params:", params);
            const response = await fetchWeatherApi(url, params);

            if (!response || !response.hourly) {
                console.error("Ungültige API-Antwort:", response);
                throw new Error("Ungültige API-Antwort");
            }

            const hourly = response.hourly;

            const weatherData = {
                hourly: {
                    time: hourly.time.map((t: string) => new Date(t)),
                    rain: hourly.rain,
                    windSpeed10m: hourly.windspeed_10m,
                    windDirection10m: hourly.winddirection_10m,
                },
            };

            setWeatherData(weatherData);
        } catch (error: any) {
            console.error("Fetch error:", error);
            setError(error.message);
        }
    }, [latitude, longitude]);

    useEffect(() => {
        fetchRadarData();
    }, [fetchRadarData]);

    const handleFetchClick = () => {
        fetchRadarData();
    };

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    if (!weatherData) {
        return <p className={styles.loading}>Daten werden geladen...</p>;
    }

    const currentData = weatherData.hourly;
    const { time, rain, windSpeed10m, windDirection10m } = currentData;

    const data = {
        labels: time.map((t: Date) => t.toLocaleString()),
        datasets: [
            {
                label: "Regen (mm)",
                data: rain,
                borderColor: "blue",
                backgroundColor: "lightblue",
                yAxisID: "y1",
            },
            {
                label: "Windgeschwindigkeit (m/s)",
                data: windSpeed10m,
                borderColor: "green",
                backgroundColor: "lightgreen",
                yAxisID: "y2",
            },
            {
                label: "Windrichtung (°)",
                data: windDirection10m,
                borderColor: "red",
                backgroundColor: "lightcoral",
                yAxisID: "y3",
            },
        ],
    };

    const options = {
        responsive: true,
        interaction: {
            mode: "index" as const,
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: "Wetterdaten",
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    callback: function (value: any, index: any, values: any) {
                        const date = new Date(time[value]);
                        if (date.getHours() === 0) {
                            return date.toLocaleDateString();
                        }
                        return date.getHours() === 0
                            ? date.toLocaleDateString()
                            : "";
                    },
                },
            },
            y1: {
                type: "linear" as const,
                display: true,
                position: "left" as const,
            },
            y2: {
                type: "linear" as const,
                display: true,
                position: "right" as const,
                grid: {
                    drawOnChartArea: false,
                },
            },
            y3: {
                type: "linear" as const,
                display: true,
                position: "right" as const,
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Niederschlagsradar</h1>
            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    className={styles.input}
                />
                <button className={styles.button} onClick={handleFetchClick}>
                    Daten abrufen
                </button>
            </div>
            <div className={styles.chartContainer}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default RadarPage;
