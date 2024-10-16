'use client'
import styles from './page.module.scss'
import { useState, useEffect } from 'react';

export default function Home() {

    const [windowsWidth, setWindowsWidth] = useState(0);

    useEffect(() => {
        setWindowsWidth(window.innerWidth);
    }, [])

    const getBlocks = () => {
        const blockSize = windowsWidth * 0.0005;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
        // @ts-ignore
        return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
        })
    }
    // @ts-ignore
    const colorize = (el) => {
        el.style.backgroundColor = '#FF2F00'
        setTimeout( () => {
            el.style.backgroundColor = 'transparent';
        }, 300)
    }


    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <p>I'm a highly ambitious Business and IT graduate eager to create an impact in the world. </p>
            </div>
            <div className={styles.grid}>
                {
                    // @ts-ignore
                    windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
                        return <div key={index} className={styles.column}>
                            {
                                getBlocks()
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}