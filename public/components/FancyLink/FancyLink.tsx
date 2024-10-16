"use client"
import Link, {LinkProps} from "next/link"
import React, {ReactNode} from "react"
import {useRouter} from "next/navigation";
import {animatePageIn, animatePageOut} from "@/public/animations/animations";


interface FancyLinkProps extends LinkProps{
    children: ReactNode
    href: string;

}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve,ms))
}

export const FancyLink = ({ children, href, ...props}: FancyLinkProps) => {
    const router = useRouter()

    const handleTransition = async (
        e : React.MouseEvent<HTMLAnchorElement, MouseEvent>
    )=> {

        e.preventDefault()

        const transitionElement = document.createElement('div');
        transitionElement.id = 'transition-element';
        transitionElement.className = 'w-screen h-screen bg-[#FF2F00] z-50 fixed top-0 left-0';
        document.body.appendChild(transitionElement);

        animatePageOut()

        await sleep(500)

        router.push(href);

        await sleep(500)

        animatePageIn()


    }

    return <Link href={href}{...props}
    onClick={handleTransition}
    > {children} </Link>
}