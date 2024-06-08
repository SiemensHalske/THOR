// src/app/dashboard/sensor-map/page.tsx

import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../DashboardLayout";
import MapFilterComponent from "../../../components/MapFilterComponent/MapFilterComponent";

const SensorMap = dynamic(
    () => import("../../../components/SensorMap/SensorMap"),
    {
        ssr: false,
    }
);

const markers = [
    { id: 0, lat: 51.739620948539276, lon: 8.25102931583},  // Wadersloh
    { id: 1, lat: 51.766623433184066, lon: 8.251120510754511 },
    { id: 2, lat: 51.758730155637885, lon: 8.28189403493295 },
    { id: 3, lat: 51.73967409793433, lon: 8.294640846009676 },
    { id: 4, lat: 51.72061804023078, lon: 8.28189403493295 },
    { id: 5, lat: 51.7127247626846, lon: 8.251120510754511 },
    { id: 6, lat: 51.72061804023078, lon: 8.220346986576072 },
    { id: 7, lat: 51.73967409793433, lon: 8.207600175499346 },
    { id: 8, lat: 51.758730155637885, lon: 8.220346986576072 },
    { id: 9, lat: 51.7935727684338, lon: 8.251120510754511 },
    { id: 10, lat: 51.77778621334144, lon: 8.31266755911139 },
    { id: 11, lat: 51.73967409793433, lon: 8.33816118126484 },
    { id: 12, lat: 51.701561982527224, lon: 8.31266755911139 },
    { id: 13, lat: 51.68577542743487, lon: 8.251120510754511 },
    { id: 14, lat: 51.701561982527224, lon: 8.189573462397632 },
    { id: 15, lat: 51.73967409793433, lon: 8.164079840244181 },
    { id: 16, lat: 51.77778621334144, lon: 8.189573462397632 },
];

const SensorMapPage = () => {
    return (
        <DashboardLayout>
            <SensorMap markers={markers} />
            <MapFilterComponent />
        </DashboardLayout>
    );
};

export default SensorMapPage;
