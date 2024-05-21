'use client'
import {projects} from "@/public/data";
import Card from "@/public/components/Card/Card";
export default function Projects() {

    return (
        <main className="">

            {

                projects.map((project, i) => {

                    return <Card url={undefined} key={`p_${i}`} {...project} i={i}/>

                })

            }

        </main>


    )

}