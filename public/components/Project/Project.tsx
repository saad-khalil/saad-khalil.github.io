'use client';
import React, {useState} from 'react'
import styles from './style.module.css';
import Link from "next/link";
import { animatePageOut } from "@/public/animations/animations";
import {useRouter} from "next/navigation";
// @ts-ignore
export default function index({index, title, description, url, setModal}) {

    const router = useRouter();

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setModal({active: false, index})
        setIsClicked(true);

        setTimeout(() => {
            animatePageOut(url, router);
        }, 1000);



    };


    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={`${styles.project} ${isClicked ? styles.noHover : ''}`}  onClick={handleClick} >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}