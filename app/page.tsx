'use client'
import {useEffect, useState} from "react";
import Landing from "@/public/components/Landing/Landing";
import Page from "@/public/components/Page/Page";
import Description from "@/public/components/Description/Description";
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/public/components/Preloader/Preloader";
import Contact from "@/public/components/Contact/Contact";
import MaskPage from "@/public/components/MaskPage/MaskPage";

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
                }, 150)
            }
        )()
    }, [])



    return (
        <main className="bg-white">
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader/>}
            </AnimatePresence>
            <Landing t1={"Portfolio Portfolio Portfolio"} t2={"Portfolio Portfolio Portfolio"}/>
            <MaskPage/>
            <Page/>
            <Contact/>
        </main>

    )

}