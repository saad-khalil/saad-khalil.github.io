"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/public/animations/animations";

export default function TransitionLink({
                                           href,
                                           label,
                                       }: {
    href: string;
    label: string;
}) {
    const router = useRouter();

    const handleClick = () => {
        animatePageOut();
    };

    return (
        <button
            className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
            onClick={handleClick}
        >
            {label}
        </button>
    );
}