'use client';
import Modal from '../Modal/Modal';
import Project from '../Project/Project';
import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './page.module.css'
import { useState } from 'react';


const projects = [
    {
        title: "Asset Mngmt",
        src: "1.png",
        color: "#000000",
        description: "Nuxt3 TS SpringBoot Python PostgresSQL",
        url : "/asset-management"
    },
    {
        title: "Office Studio",
        src: "2.png",
        color: "#8C8C8C",
        description: "hello",
        url : "/hello2"
    },
    {
        title: "Locomotive",
        src: "3.jpg",
        color: "#EFE8D3",
        description: "hello",
        url : "/hello3"
    },
    {
        title: "Silencio",
        src: "4.jpg",
        color: "#706D63",
        description: "hello",
        url : "/hello4"

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
