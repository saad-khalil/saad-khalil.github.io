'use client'
import {motion} from "framer-motion";
import Landing from "@/public/components/Landing/Landing";
import withTransition from "@/public/components/Preloader/withTransition";
import MaskPage from "@/public/components/MaskPage/MaskPage";

const Home = () => {
    return (
        <MaskPage/>

    )
}


export default withTransition(Home);