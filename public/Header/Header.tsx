'use client'
import styles from './style.module.scss'
import { useState } from 'react';
import {AnimatePresence} from "framer-motion";
import Stairs from '../components/Stairs/Stairs';
import Menu from '../components/Menu/Menu';


export default function Header() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
            <AnimatePresence mode="wait">

                {isActive &&
                    <>
                        <Stairs/>
                        <Menu closeMenu={() => {setIsActive(false)}}/>
                    </>}


            </AnimatePresence>
        </>
    )
}