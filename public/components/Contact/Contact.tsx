'use client';

import styles from './page.module.css'
import {useRef, useState} from "react";
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { disperse } from './anim';


export default function Contact() {

    const background = useRef(null);

    // @ts-ignore
    const setBackground = (isActive) => {
        gsap.to(background.current, {opacity: isActive ? 0.8 : 0})
    }
    return (

        <main className={styles.main}>

            <div className={styles.body}>


                <div className={styles.introLine}>

                    <p>Saad</p>

                    <p>Khalil</p>

                </div>


                <div className={styles.introLine}>

                    <p>University</p>

                    <p>of</p>

                </div>


                <div className={styles.introLine}>

                    <p>Twente</p>

                    <p>NL</p>

                </div>


                <TextDipserse setBackground={setBackground}>
                    <p>+31 639863378</p>
                </TextDipserse>

                <TextDipserse setBackground={setBackground}>
                    <p>Email</p>
                </TextDipserse>

                <TextDipserse setBackground={setBackground}>
                    <p>&nbsp;&nbsp;Linkedin</p>
                </TextDipserse>


            </div>
            <div ref={background} className={styles.background}></div>
        </main>

    )

    function TextDipserse(props: { children: any; setBackground: any; }) {

        const {children, setBackground} = props;

        const [isAnimated, setIsAnimated] = useState(false);

        const getChars = (element: { props: { children: any; }; }) => {
            let chars = [];
            if (children.length) {
                children.forEach((el: { props: { children: any; }; }, i: any) => {
                    chars.push(splitWord(el.props.children, i))
                })
            } else {
                chars.push(splitWord(element.props.children, 1))
            }
            return chars;
        }

        const splitWord = (word: string, indexOfWord: number) => {
            // @ts-ignore
            let chars = [];
            word.split("").forEach((char, i) => {
                chars.push(<motion.span custom={indexOfWord * i} variants={disperse}
                                        animate={isAnimated ? "open" : "closed"} key={char + i}>{char}</motion.span>)
            })
            // @ts-ignore
            return chars;
        }

        const manageMouseEnter = () => {
            setBackground(true)
            setIsAnimated(true);
        }
        const manageMouseLeave = () => {
            setBackground(false)
            setIsAnimated(false);
        }

        return (
            <div style={{cursor: "pointer"}} onMouseEnter={() => {
                manageMouseEnter()
            }} onMouseLeave={() => { // @ts-ignore
                manageMouseLeave(false)
            }} className={styles.introLine}>
                {getChars(children)}
            </div>
        )
    }
}