// src/app/LayoutWrapper.tsx

"use client";

import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LayoutWrapperProps {
    children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    const router = useRouter();

    return <>{children}</>;
};

export default LayoutWrapper;
