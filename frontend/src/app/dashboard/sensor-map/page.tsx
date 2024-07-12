"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const SensorMap = dynamic(
    () => import("../../../components/SensorMap/SensorMap"),
    { ssr: false }
);

interface Marker {
    id: number;
    latitude: number;
    longitude: number;
    intensity: number;
}

const SensorMapPage: React.FC = () => {
    const [sensors, setSensors] = useState<Marker[]>([]);
    const center: [number, number] = [8.250903251575782, 51.72555613128786];
    const router = useRouter();

    useEffect(() => {
        const hardcodedMarkers: Marker[] = [
            {
                id: 0,
                latitude: 51.72555613128786,
                longitude: 8.250903251575782,
                intensity: 150,
            },
            {
                id: 1,
                latitude: 51.74860645335757,
                longitude: 8.266261325833609,
                intensity: 150,
            },
            {
                id: 2,
                latitude: 51.739072496268314,
                longitude: 8.272618277563437,
                intensity: 150,
            },
            {
                id: 3,
                latitude: 51.72954052944327,
                longitude: 8.266254863672712,
                intensity: 150,
            },
            {
                id: 4,
                latitude: 51.725598241375,
                longitude: 8.250903251575782,
                intensity: 150,
            },
            {
                id: 5,
                latitude: 51.72954052944327,
                longitude: 8.235551639478851,
                intensity: 150,
            },
            {
                id: 6,
                latitude: 51.739072496268314,
                longitude: 8.229188225588127,
                intensity: 150,
            },
            {
                id: 7,
                latitude: 51.74860645335757,
                longitude: 8.235545177317954,
                intensity: 150,
            },
            {
                id: 8,
                latitude: 51.76603772902895,
                longitude: 8.250903251575782,
                intensity: 150,
            },
            {
                id: 9,
                latitude: 51.75813638174119,
                longitude: 8.281625868520825,
                intensity: 150,
            },
            {
                id: 10,
                latitude: 51.73906467827819,
                longitude: 8.29433399704952,
                intensity: 150,
            },
            {
                id: 11,
                latitude: 51.72000453685954,
                longitude: 8.281600017175961,
                intensity: 150,
            },
            {
                id: 12,
                latitude: 51.71211110509101,
                longitude: 8.250903251575782,
                intensity: 150,
            },
            {
                id: 13,
                latitude: 51.72000453685954,
                longitude: 8.220204685975602,
                intensity: 150,
            },
            {
                id: 14,
                latitude: 51.73906467827819,
                longitude: 8.207477203446611,
                intensity: 150,
            },
            {
                id: 15,
                latitude: 51.75813638174119,
                longitude: 8.220108633713053,
                intensity: 150,
            },
            {
                id: 16,
                latitude: 51.7392871022089,
                longitude: 8.252146574342877,
                intensity: 150,
            },
        ];
        setSensors(hardcodedMarkers);
        console.log("Hardcoded markers set: ", hardcodedMarkers); // Debug: log markers
    }, []);

    const handleMarkerClick = (id: number) => {
        console.log(`Marker clicked: ${id}`);
        router.push(`/dashboard/sensor-data?sensorId=${id}`);
    };

    return (
        <div>
            <SensorMap
                center={center}
                markers={sensors}
                locationEnabled={true}
                onMarkerClick={handleMarkerClick}
            />
        </div>
    );
};

export default SensorMapPage;
