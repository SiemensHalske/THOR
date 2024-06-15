// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import sensorReducer from "../features/sensor/sensorSlice";

const store = configureStore({
    reducer: {
        sensor: sensorReducer,
    },
    devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
