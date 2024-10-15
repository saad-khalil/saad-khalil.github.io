'use client'
import {useEffect, useState} from "react";
import Landing from "@/public/components/Landing/Landing";
import Page from "@/public/components/Page/Page";
import Description from "@/public/components/Description/Description";
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/public/components/Preloader/Preloader";
import Contact from "@/public/components/Contact/Contact";

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();

                setTimeout( () => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0,0);
                }, 2000)
            }
        )()
    }, [])



    return (
        <main className="bg-white">
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader/>}
            </AnimatePresence>
            <Landing t1={"Software Developer"} t2={"Software Developer"}/>
            <Page/>
            <Contact/>
        </main>

    )

}