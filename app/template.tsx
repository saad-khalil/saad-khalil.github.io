
"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/public/animations/animations";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <div>
            {children}
        </div>
    );
}