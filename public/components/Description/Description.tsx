import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim';
import RoundedButton from '../RoundedButton/RoundedButton';
import Link from "next/link";
export default function index() {

    const phrase = "Hello! I'm Saad, a recent graduate with a Bachelor's degree in Business and Information Technology from the University of Twente.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My goal is to craft solutions that seamlessly merge business and technology, driving success for every project.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href="/">
                        <RoundedButton className={styles.button} >
                            <p>About me</p>
                        </RoundedButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}