'use client';
import Modal from '../Modal/Modal';
import Project from '../Project/Project';
import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './page.module.css'
import { useState } from 'react';


const projects = [
    {
        title: "C2 Montreal",
        src: "1.png",
        color: "#000000"
    },
    {
        title: "Office Studio",
        src: "2.png",
        color: "#8C8C8C"
    },
    {
        title: "Locomotive",
        src: "3.jpg",
        color: "#EFE8D3"
    },
    {
        title: "Silencio",
        src: "4.jpg",
        color: "#706D63"
    }
]

export default function Page() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} key={index}/>
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}
