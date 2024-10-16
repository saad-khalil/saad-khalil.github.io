'use client';
import React, {useState} from 'react'
import styles from './style.module.css';
import Link from "next/link";
import {animatePageIn, animatePageOut} from "@/public/animations/animations";
import {useRouter} from "next/navigation";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve,ms))
}


// @ts-ignore



export default function index({index, title, description, url, setModal}) {

    const router = useRouter();

    const [isClicked, setIsClicked] = useState(false);

    const transitionElement = document.createElement('div');
    transitionElement.id = 'transition-element';
    transitionElement.className = 'w-screen h-screen bg-[#FF2F00] z-50 fixed top-0 left-0';

    const handleTransition = async (


    )=> {
        setModal({active: false, index})
        setIsClicked(true);



        document.body.appendChild(transitionElement);
        console.log('Transition element added:', transitionElement);

        animatePageOut()
        console.log('animatePageOut called');
        await sleep(1000)

        router.push(url);

        await sleep(1000)

        animatePageIn()
        console.log('animatePageIn called');

        await sleep(1000)

        document.body.removeChild(transitionElement);

    }

    // const handleClick = () => {
    //     setModal({active: false, index})
    //     setIsClicked(true);
    //
    //     setTimeout(() => {
    //         animatePageOut(url, router);
    //     }, 1000);
    //
    //
    //
    // };


    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={`${styles.project} ${isClicked ? styles.noHover : ''}`}  onClick={handleTransition} >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}