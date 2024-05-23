import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

// @ts-ignore
export default function index({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        console.log(children)
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        // @ts-ignore
        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            // @ts-ignore
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x * 0.35);
            yTo(y * 0.35)
        })
        // @ts-ignore
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}