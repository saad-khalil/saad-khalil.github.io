import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from './anim';
import styles from './style.module.scss';
import Link from './Link';
import {useState} from "react";

const menu = [
    {
        title: "Projects",
        description: "To See Everything",
        images: ['projects1.jpg', 'projects2.jpg']
    },
    {
        title: "About me",
        description: "To Learn Everything",
        images: ['agence1.jpg', 'agence2.jpg']
    },
    {
        title: "Contact",
        description: "To Send a FAX",
        images: ['contact1.jpg', 'contact2.jpg']
    }
]

// @ts-ignore
export default function index({closeMenu}) {

    const [isActive, setIsActive] = useState(false);


    return (
        <div className={styles.menu}>

            <div className={styles.button} onClick={() => {setIsActive(!isActive); closeMenu();}}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>

            <div className={styles.body}>
                {
                    menu.map((el, index) => {
                        return <Link data={el} index={index} key={index}/>
                    })
                }
            </div>


        </div>
    )
}