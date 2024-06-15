// src/components/ClientProvider.tsx

"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import wrapper from "../app/store";
import store from "../app/store";

interface ClientProviderProps {
    children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter(); // Verwenden Sie useRouter innerhalb der Client-Komponente

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
