'use client'
import {motion} from "framer-motion";
import Landing from "@/public/components/Landing/Landing";
import withTransition from "@/public/components/Preloader/withTransition";

const Home = () => {
    return (
        <main className="bg-white">
            {/*<Landing t1={"Asset Management"} t2={"Asset Management"}/>*/}
            <h1>HELLLO WORLD</h1>
        </main>

    )
}


export default withTransition(Home);