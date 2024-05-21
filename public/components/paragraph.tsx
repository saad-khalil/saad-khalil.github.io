"use client"
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

// className={"text-black text-5xl md:text-7xl lg:text-9xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 "}
// @ts-ignore
export default function Paragraph({paragraph}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = paragraph.split(" ")
    return (
        <p
            ref={container}
            className={styles.paragraph}
        >
            {
                words.map( (word: any, i: React.Key | null | undefined) => {
                    // @ts-ignore
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </p>
    )
}

// @ts-ignore
const Word = ({children, progress, range}) => {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <span className={styles.word}>
      {
          children.split("").map((char: any, i: number) => {
              const start = range[0] + (i * step);
              const end = range[0] + ((i + 1) * step)
              return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
          })
      }
    </span>
    )
}

// @ts-ignore
const Char = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
        <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
    )
}














