"use client";

// src/components/Sidebar/Sidebar.tsx

import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import {
    Map as MapIcon,
    BarChart,
    FlashOn,
    Settings,
    NotificationsActive,
    History,
} from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleTabClick = (tab: string) => {
        switch (tab) {
            case "map":
                router.push("/dashboard/sensor-map");
                break;
            case "data":
                router.push("/dashboard/sensor-data");
                break;
            case "lightning":
                router.push("/dashboard/lightning-data");
                break;
            case "alarm":
                router.push("/dashboard/alarm-system");
                break;
            case "history":
                router.push("/dashboard/history");
                break;
            case "settings":
                router.push("/dashboard/settings");
                break;
            default:
                router.push("/dashboard/sensor-map");
                break;
        }
    };

    return (
        <List component="nav" className={styles.sidebar}>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/sensor-map" && styles.selected
                }`}
                onClick={() => handleTabClick("map")}
            >
                <ListItemIcon>
                    <MapIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Sensor Map" />
            </ListItem>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/sensor-data" && styles.selected
                }`}
                onClick={() => handleTabClick("data")}
            >
                <ListItemIcon>
                    <BarChart style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Sensor Data" />
            </ListItem>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/lightning-data" && styles.selected
                }`}
                onClick={() => handleTabClick("lightning")}
            >
                <ListItemIcon>
                    <FlashOn style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Lightning Data" />
            </ListItem>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/alarm-system" && styles.selected
                }`}
                onClick={() => handleTabClick("alarm")}
            >
                <ListItemIcon>
                    <NotificationsActive style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Alarm System" />
            </ListItem>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/history" && styles.selected
                }`}
                onClick={() => handleTabClick("history")}
            >
                <ListItemIcon>
                    <History style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="History" />
            </ListItem>
            <ListItem
                button
                className={`${styles.navItem} ${styles.listItem} ${
                    pathname === "/dashboard/settings" && styles.selected
                }`}
                onClick={() => handleTabClick("settings")}
            >
                <ListItemIcon>
                    <Settings style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </List>
    );
};

export default Sidebar;
