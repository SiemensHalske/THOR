"use client";

import React, { useRef, useState, CSSProperties } from "react";
import {
    DndProvider,
    useDrag,
    useDrop,
    DragSourceMonitor,
    DropTargetMonitor,
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import styles from "./page.module.css";
import SensorMap from "../../components/SensorMap/SensorMap";
import SensorDataCard from "../../components/SensorDataCard/SensorDataCard";

const GRID_SIZE = 20;

const snapToGrid = (x: number, y: number) => {
    const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
    const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;
    return [snappedX, snappedY];
};

interface Item {
    id: number;
    text: string;
    type: string;
    left: number;
    top: number;
    width?: number;
    height?: number;
    center?: [number, number];
    hidden?: boolean;
    sensorId?: number;
}

interface DragItem {
    id: number;
    left: number;
    top: number;
    type: string;
    width?: number;
    height?: number;
}

interface DraggableListItemProps {
    item: Item;
    index: number;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableListItem: React.FC<DraggableListItemProps> = ({
    item,
    index,
    moveItem,
}) => {
    const ref = useRef<HTMLLIElement>(null);

    const [, drop] = useDrop<DragItem>({
        accept: "ITEM",
        hover(draggedItem: DragItem, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = draggedItem.id;
            const hoverIndex = item.id;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            draggedItem.id = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: "ITEM",
        item: { id: item.id, left: item.left, top: item.top, type: item.type },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <li
            ref={ref}
            className={`${styles.widgetItem} ${
                isDragging ? styles.dragging : ""
            }`}
        >
            {item.text}
        </li>
    );
};

const DroppableItem: React.FC<{
    item: Item;
    onDrop: (id: number, left: number, top: number) => void;
    onSelect: (item: Item) => void;
}> = ({ item, onDrop, onSelect }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag({
        type: "DROPPED_ITEM",
        item: { id: item.id, left: item.left, top: item.top, type: item.type },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(ref);

    return (
        <div
            ref={ref}
            className={`${styles.droppedItem} ${
                isDragging ? styles.dragging : ""
            }`}
            style={
                {
                    left: item.left,
                    top: item.top,
                    width: item.width || 100,
                    height: item.height || 100,
                } as CSSProperties
            }
            onClick={() => onSelect(item)}
        >
            {item.type === "map" ? (
                <div
                    style={{
                        width: "400px",
                        height: "400px",
                        position: "absolute",
                        left: -1,
                        top: -1,
                    }}
                >
                    <SensorMap
                        markers={[]}
                        locationEnabled={false}
                        center={
                            item.center ?? [
                                8.251120510754511, 51.73967409793433,
                            ]
                        }
                    />
                    <div
                        className={styles.mapOverlay}
                        style={{
                            display: item.hidden ? "block" : "transparent",
                        }}
                    />
                </div>
            ) : item.type === "data" && item.sensorId !== undefined ? (
                <div
                    style={{
                        width: "225px",
                        height: "150px",
                        position: "absolute",
                        left: -11,
                        top: -11,
                    }}
                >
                    <SensorDataCard
                        id={item.sensorId}
                        temperature={25}
                        humidity={50}
                        pressure={1013}
                    />
                </div>
            ) : (
                item.text
            )}
        </div>
    );
};

const DroppableArea: React.FC<{
    items: Item[];
    onDrop: (id: number, left: number, top: number) => void;
    onSelect: (item: Item) => void;
}> = ({ items, onDrop, onSelect }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: ["ITEM", "DROPPED_ITEM"],
        drop: (draggedItem: DragItem, monitor: DropTargetMonitor) => {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };
            let left = Math.round(draggedItem.left + delta.x);
            let top = Math.round(draggedItem.top + delta.y);

            [left, top] = snapToGrid(left, top); // Snap to grid

            // Check for overlap
            const isOverlapping = items.some((item) => {
                if (item.id === draggedItem.id) return false;
                const itemRect = {
                    left: item.left,
                    top: item.top,
                    right: item.left + (item.width || 100),
                    bottom: item.top + (item.height || 100),
                };
                const draggedItemRect = {
                    left,
                    top,
                    right: left + (draggedItem.width || 100),
                    bottom: top + (draggedItem.height || 100),
                };
                return (
                    draggedItemRect.left < itemRect.right &&
                    draggedItemRect.right > itemRect.left &&
                    draggedItemRect.top < itemRect.bottom &&
                    draggedItemRect.bottom > itemRect.top
                );
            });

            if (!isOverlapping) {
                onDrop(draggedItem.id, left, top);
            } else {
                alert("Widgets cannot overlap!");
            }

            return undefined;
        },
    });

    drop(ref);

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={styles.droppableArea}
        >
            {items.map((item) => (
                <DroppableItem
                    key={item.id}
                    item={item}
                    onDrop={onDrop}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

const Toolbox: React.FC<{
    items: Item[];
    onDrop: (id: number) => void;
}> = ({ items, onDrop }) => {
    const [, drop] = useDrop({
        accept: "DROPPED_ITEM",
        drop: (draggedItem: DragItem) => {
            onDrop(draggedItem.id);
            return undefined;
        },
    });

    return (
        <div
            className={styles.toolbox}
            ref={drop as unknown as React.RefObject<HTMLDivElement>}
        >
            <h2>Widgets</h2>
            <ul className={styles.widgetsList}>
                {items.map((item, index) => (
                    <DraggableListItem
                        key={item.id}
                        index={index}
                        item={item}
                        moveItem={() => {}}
                    />
                ))}
            </ul>
        </div>
    );
};

const dmsToDecimal = (degrees: number, minutes: number, seconds: number) => {
    return degrees + minutes / 60 + seconds / 3600;
};

const decimalToDms = (decimal: number) => {
    const degrees = Math.floor(decimal);
    const minutes = Math.floor((decimal - degrees) * 60);
    const seconds = (decimal - degrees - minutes / 60) * 3600;
    return [degrees, minutes, seconds] as [number, number, number];
};

const PropertiesPanel: React.FC<{
    item: Item;
    onChange: (updatedItem: Item) => void;
}> = ({ item, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedValue = parseFloat(value);
        const newItem = { ...item };

        if (name.startsWith("latitude") || name.startsWith("longitude")) {
            const [type, component] = name.split("_");
            const index = type === "longitude" ? 0 : 1;
            let degrees, minutes, seconds;

            if (type === "longitude") {
                [degrees, minutes, seconds] = decimalToDms(
                    newItem.center?.[0] ?? 0
                );
            } else {
                [degrees, minutes, seconds] = decimalToDms(
                    newItem.center?.[1] ?? 0
                );
            }

            if (component === "deg") degrees = updatedValue;
            if (component === "min") minutes = updatedValue;
            if (component === "sec") seconds = updatedValue;

            newItem.center = [
                type === "longitude"
                    ? dmsToDecimal(degrees, minutes, seconds)
                    : newItem.center?.[0] ?? 0,
                type === "latitude"
                    ? dmsToDecimal(degrees, minutes, seconds)
                    : newItem.center?.[1] ?? 0,
            ] as [number, number];
        } else if (name === "sensorId") {
            newItem.sensorId = parseInt(value, 10);
        } else {
            (newItem as any)[name] = updatedValue;
        }

        onChange(newItem);
    };

    const [latDeg, latMin, latSec] = decimalToDms(item.center?.[1] ?? 0);
    const [lonDeg, lonMin, lonSec] = decimalToDms(item.center?.[0] ?? 0);

    return (
        <div className={styles.properties}>
            <p>ID: {item.id}</p>
            <div>
                <label>
                    Text:
                    <input
                        type="text"
                        name="text"
                        value={item.text}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            {item.type === "map" && item.center && (
                <>
                    <div>
                        <h3>Map Center</h3>
                        <label>
                            Latitude:
                            <input
                                type="number"
                                name="latitude_deg"
                                value={latDeg}
                                onChange={handleInputChange}
                            />
                            °
                            <input
                                type="number"
                                name="latitude_min"
                                value={latMin}
                                onChange={handleInputChange}
                            />
                            &apos;
                            <input
                                type="number"
                                name="latitude_sec"
                                value={latSec}
                                step="0.01"
                                onChange={handleInputChange}
                            />
                            &quot;
                        </label>
                    </div>
                    <div>
                        <label>
                            Longitude:
                            <input
                                type="number"
                                name="longitude_deg"
                                value={lonDeg}
                                onChange={handleInputChange}
                            />
                            °
                            <input
                                type="number"
                                name="longitude_min"
                                value={lonMin}
                                onChange={handleInputChange}
                            />
                            &apos;
                            <input
                                type="number"
                                name="longitude_sec"
                                value={lonSec}
                                step="0.01"
                                onChange={handleInputChange}
                            />
                            &quot;
                        </label>
                    </div>
                </>
            )}
            {item.type === "data" && (
                <div>
                    <label>
                        Sensor ID:
                        <input
                            type="number"
                            name="sensorId"
                            value={item.sensorId}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

const Page: React.FC = () => {
    const [items] = useState<Item[]>([
        {
            id: 1,
            text: "Widget 1",
            type: "text",
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        },
        {
            id: 2,
            text: "Widget 2",
            type: "text",
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        },
        {
            id: 3,
            text: "Widget 3",
            type: "text",
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        },
        {
            id: 4,
            text: "Data Widget",
            type: "data",
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            sensorId: 1,
        },
        {
            id: 5,
            text: "Map Widget",
            type: "map",
            left: 0,
            top: 0,
            width: 400,
            height: 400,
            center: [8.251120510754511, 51.73967409793433],
            hidden: true,
        },
    ]);

    const [droppedItems, setDroppedItems] = useState<Item[]>([]);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleDrop = (id: number, left: number, top: number) => {
        const itemIndex = droppedItems.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
            setDroppedItems(
                update(droppedItems, {
                    [itemIndex]: {
                        $merge: { left, top },
                    },
                })
            );
        } else {
            const item = items.find((item) => item.id === id);
            if (item) {
                const newItem = { ...item, id: Date.now(), left, top };
                setDroppedItems([...droppedItems, newItem]);
            }
        }
    };

    const handleSelect = (item: Item) => {
        setSelectedItem(item);
    };

    const handleRemove = (id: number) => {
        setDroppedItems(droppedItems.filter((item) => item.id !== id));
    };

    const handleChange = (updatedItem: Item) => {
        setDroppedItems(
            droppedItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
        setSelectedItem(updatedItem);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.appContainer}>
                <h1 className={styles.appTitle}>
                    Drag and Drop List with Drop Area
                </h1>
                <div className={styles.dndContainer}>
                    <div className={styles.column}>
                        <Toolbox items={items} onDrop={handleRemove} />
                    </div>
                    <div className={styles.column} style={{ flex: 3 }}>
                        <DroppableArea
                            items={droppedItems}
                            onDrop={handleDrop}
                            onSelect={handleSelect}
                        />
                    </div>
                    <div className={styles.column}>
                        <h2>Properties</h2>
                        {selectedItem && (
                            <PropertiesPanel
                                item={selectedItem}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default Page;
