'use client'

import Image from 'next/image'

import styles from './page.module.css'

import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


// @ts-ignore
export default function Landing({t1, t2}) {



    const firstText = useRef(null);

    const secondText = useRef(null);

    const slider = useRef(null);

    let xPercent = 0;



    useEffect( () => {

        // @ts-ignore
        gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})

        requestAnimationFrame(animate);

    }, [])

    let direction = -1;



    useEffect( () => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {

            scrollTrigger: {

                trigger: document.documentElement,

                scrub: 0.5,

                start: 0,

                end: window.innerHeight,

                onUpdate: e => direction = e.direction * -1

            },

            x: "-500px",

        })

        requestAnimationFrame(animate);

    }, [])


    const animate = () => {

        if(xPercent < -100){

            xPercent = 0;

        }

        else if(xPercent > 0){

            xPercent = -100;

        }

        gsap.set(firstText.current, {xPercent: xPercent})

        gsap.set(secondText.current, {xPercent: xPercent})

        requestAnimationFrame(animate);

        xPercent += 0.005 * direction;

    }



    return (

        <main className={styles.main}>



            <div className={styles.sliderContainer}>

                <div ref={slider} className={styles.slider}>

                    <p ref={firstText}>{t1}</p>

                    <p ref={secondText}>{t2}</p>

                </div>

            </div>

        </main>

    )

}