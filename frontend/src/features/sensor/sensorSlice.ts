// src/features/sensorSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Sensor {
    // Exportiert den Sensor Typ
    id: number;
    temperature: number;
    humidity: number;
    pressure: number;
    serialNumber: string;
    image: string;
}

interface SensorState {
    sensors: Sensor[];
}

const initialState: SensorState = {
    sensors: [],
};

const sensorSlice = createSlice({
    name: "sensor",
    initialState,
    reducers: {
        addSensor: (state, action: PayloadAction<Sensor>) => {
            state.sensors.push(action.payload);
        },
        // Weitere Reducer hinzufügen...
    },
});

export const { addSensor } = sensorSlice.actions;
export default sensorSlice.reducer;
