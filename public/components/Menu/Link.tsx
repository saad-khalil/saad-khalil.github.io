import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from './anim';
import Image from 'next/image';
import { MouseEvent, useRef} from 'react';
import gsap from 'gsap';
import Link from 'next/link';

// @ts-ignore
export default function link({data, index}) {
    const {title, description, images} = data;
    const outer = useRef(null);
    const inner = useRef(null);

    // @ts-ignore
    const manageMouseEnter = (e) => {
        const bounds = e.target.getBoundingClientRect();
        if (e.clientY < bounds.top + (bounds.height / 2)) {
            gsap.set(outer.current, {top: "-100%"})
            gsap.set(inner.current, {top: "100%"})
        } else {
            gsap.set(outer.current, {top: "100%"})
            gsap.set(inner.current, {top: "-100%"})
        }
        gsap.to(outer.current, {top: "0%", duration: 0.3})
        gsap.to(inner.current, {top: "0%", duration: 0.3})
    }

    // @ts-ignore
    const manageMouseLeave = (e) => {
        // @ts-ignore
        const bounds = e.target.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.to(outer.current, {top: "-100%", duration: 0.3})
            gsap.to(inner.current, {top: "100%",  duration: 0.3})
        }
        else{
            gsap.to(outer.current, {top: "100%", duration: 0.3})
            gsap.to(inner.current, {top: "-100%",  duration: 0.3})
        }
    }

    return (
        <motion.div
            onMouseEnter={ (e) => {manageMouseEnter(e)}}
            onMouseLeave={(e) => { // @ts-ignore
                manageMouseLeave(e)}}
            variants={rotateX}
            {...mountAnim}
            custom={index}
            className={styles.el}>
            <Link href="/">{title}</Link>
            <div ref={outer} className={styles.outer}>
                <div ref={inner} className={styles.inner}>

                    {
                        [...Array(2)].map( (_, index) => {
                            return <div key={index} className={styles.container}>
                                <p>&nbsp;&nbsp;&nbsp; </p>
                                <p>{description}</p>
                                <p>&nbsp;&nbsp;&nbsp; </p>
                                <p>{description}</p>
                            </div>
                        })
                    }

                </div>
            </div>

        </motion.div>
    )
}