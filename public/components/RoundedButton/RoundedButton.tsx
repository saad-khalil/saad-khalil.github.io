import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic/Magnetic';


// @ts-ignore
export default function index({children, backgroundColor="#8767F6", ...attributes}) {

    const circle = useRef(null);
    let timeline = useRef(null);
    // @ts-ignore
    let timeoutId = null;
    useEffect( () => {
        // @ts-ignore
        timeline.current = gsap.timeline({paused: true})
        // @ts-ignore
        timeline.current
            .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
            .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
    }, [])

    const manageMouseEnter = () => {
        // @ts-ignore
        if(timeoutId) clearTimeout(timeoutId)
        // @ts-ignore
        timeline.current.tweenFromTo('enter', 'exit');
    }

    const manageMouseLeave = () => {
        timeoutId = setTimeout( () => {
            // @ts-ignore
            timeline.current.play();
        }, 300)
    }

    return (
        <Magnetic>
            <div className={styles.roundedButton} style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
                {
                    children
                }
                <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
            </div>
        </Magnetic>
    )
}