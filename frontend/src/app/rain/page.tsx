// pages/RadarPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "./RadarPage.module.css";

const fetchWeatherApi = async (url: string, params: any) => {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);
    return response.json();
};

const RadarPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRadarData = async () => {
            try {
                const params = {
                    latitude: 51.73929,
                    longitude: 8.2509,
                    hourly: ["rain", "windspeed_10m", "winddirection_10m"],
                };
                const url = "https://api.open-meteo.com/v1/forecast";
                const response = await fetchWeatherApi(url, params);

                console.log("API Response:", response); // Log the API response

                if (!response || !response.hourly) {
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

                console.log("Processed Weather Data:", weatherData); // Log the processed weather data

                setWeatherData(weatherData);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchRadarData();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Niederschlagsradar</h1>
            {error ? (
                <p className={styles.error}>{error}</p>
            ) : weatherData ? (
                <div className={styles.radarGrid}>
                    {weatherData.hourly.time.map(
                        (time: Date, index: number) => (
                            <div key={index} className={styles.radarFrame}>
                                <p>{time.toLocaleString()}</p>
                                <p>Regen: {weatherData.hourly.rain[index]}</p>
                                <p>
                                    Windgeschwindigkeit:{" "}
                                    {weatherData.hourly.windSpeed10m[index]}
                                </p>
                                <p>
                                    Windrichtung:{" "}
                                    {weatherData.hourly.windDirection10m[index]}
                                </p>
                                {/* Hier könnten Sie das Radarbild für den jeweiligen Zeitpunkt einfügen */}
                            </div>
                        )
                    )}
                </div>
            ) : (
                <p className={styles.loading}>Daten werden geladen...</p>
            )}
        </div>
    );
};

export default RadarPage;
