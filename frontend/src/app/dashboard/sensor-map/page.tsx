import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../DashboardLayout";
import MapFilterComponent from "../../../components/MapFilterComponent/MapFilterComponent";
import { styleText } from "util";
import styles from "./page.module.css";

const SensorMap = dynamic(
    () => import("../../../components/SensorMap/SensorMap"),
    {
        ssr: false,
    }
);

const markers = [
    {
        id: 0,
        latitude: 51.739620948539276,
        longitude: 8.25102931583,
        intensity: 1.0,
    }, // Wadersloh
    {
        id: 1,
        latitude: 51.766623433184066,
        longitude: 8.251120510754511,
        intensity: 1.0,
    },
    {
        id: 2,
        latitude: 51.758730155637885,
        longitude: 8.28189403493295,
        intensity: 1.0,
    },
    {
        id: 3,
        latitude: 51.73967409793433,
        longitude: 8.294640846009676,
        intensity: 1.0,
    },
    {
        id: 4,
        latitude: 51.72061804023078,
        longitude: 8.28189403493295,
        intensity: 1.0,
    },
    {
        id: 5,
        latitude: 51.7127247626846,
        longitude: 8.251120510754511,
        intensity: 1.0,
    },
    {
        id: 6,
        latitude: 51.72061804023078,
        longitude: 8.220346986576072,
        intensity: 1.0,
    },
    {
        id: 7,
        latitude: 51.73967409793433,
        longitude: 8.207600175499346,
        intensity: 1.0,
    },
    {
        id: 8,
        latitude: 51.758730155637885,
        longitude: 8.220346986576072,
        intensity: 1.0,
    },
    {
        id: 9,
        latitude: 51.7935727684338,
        longitude: 8.251120510754511,
        intensity: 1.0,
    },
    {
        id: 10,
        latitude: 51.77778621334144,
        longitude: 8.31266755911139,
        intensity: 1.0,
    },
    {
        id: 11,
        latitude: 51.73967409793433,
        longitude: 8.33816118126484,
        intensity: 1.0,
    },
    {
        id: 12,
        latitude: 51.701561982527224,
        longitude: 8.31266755911139,
        intensity: 1.0,
    },
    {
        id: 13,
        latitude: 51.68577542743487,
        longitude: 8.251120510754511,
        intensity: 1.0,
    },
    {
        id: 14,
        latitude: 51.701561982527224,
        longitude: 8.189573462397632,
        intensity: 1.0,
    },
    {
        id: 15,
        latitude: 51.73967409793433,
        longitude: 8.164079840244181,
        intensity: 1.0,
    },
    {
        id: 16,
        latitude: 51.77778621334144,
        longitude: 8.189573462397632,
        intensity: 1.0,
    },
];

const SensorMapPage = () => {
    return (
        <DashboardLayout>
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    position: "relative",
                    left: -1,
                    top: -1,
                }}
            >
                <SensorMap
                    markers={[
                        {
                            latitude: 51.739620948539276,
                            longitude: 8.25102931583,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.766623433184066,
                            longitude: 8.251120510754511,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.758730155637885,
                            longitude: 8.28189403493295,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.73967409793433,
                            longitude: 8.294640846009676,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.72061804023078,
                            longitude: 8.28189403493295,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.7127247626846,
                            longitude: 8.251120510754511,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.72061804023078,
                            longitude: 8.220346986576072,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.73967409793433,
                            longitude: 8.207600175499346,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.758730155637885,
                            longitude: 8.220346986576072,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.7935727684338,
                            longitude: 8.251120510754511,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.77778621334144,
                            longitude: 8.31266755911139,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.73967409793433,
                            longitude: 8.33816118126484,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.701561982527224,
                            longitude: 8.31266755911139,
                            intensity: 1.0,
                        },
                        {
                            latitude: 51.68577542743487,
                            longitude: 8.251120510754511,
                            intensity: 1.0,
                        },
                    ]}
                    locationEnabled={false}
                    center={[8.251120510754511, 51.73967409793433]}
                    visible={true}
                />
            </div>
            <MapFilterComponent />
        </DashboardLayout>
    );
};

export default SensorMapPage;
