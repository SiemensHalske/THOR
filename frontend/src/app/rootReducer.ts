import { combineReducers } from "@reduxjs/toolkit";
import sensorReducer from "../features/sensor/sensorSlice";

const rootReducer = combineReducers({
    sensor: sensorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
