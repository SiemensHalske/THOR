// src/app/routes.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./dashboard/page";
import SensorMapPage from "./dashboard/sensor-map/page";
import SensorDataPage from "./dashboard/sensor-data/page";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<DashboardPage />}>
                    <Route path="sensor-map" element={<SensorMapPage />} />
                    <Route path="sensor-data" element={<SensorDataPage />} />
                    {/* Weitere Routen können hier hinzugefügt werden */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
