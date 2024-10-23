'use client';
import Modal from '../Modal/Modal';
import Project from '../Project/Project';
import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './page.module.css'
import { useState } from 'react';


const projects = [
    {
        title: "Returnable Asset Management",
        src: "1.png",
        color: "#EFE8D3",
        description: "Grolsch & Topsector Logistiek",
        url : "/"
    },
    {
        title: "Bank Transcation Analysis",
        src: "2.png",
        color: "#8C8C8C",
        description: "Topicus & Fyndoo",
        url : "/"
    },
    {
        title: "Idioma",
        src: "3.png",
        color: "#000",
        description: "Universtity of Twente",
        url : "/"
    },
    {
        title: "Restaurant Search",
        src: "4.png",
        color: "#706D63",
        description: "Just Eat Takeaway",
        url : "/"

    }
]

export default function Page() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} key={index} url={project.url} description={project.description}/>
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}
