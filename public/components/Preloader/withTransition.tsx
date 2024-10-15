import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './anim'; // Assuming the slideUp animation is exported from the anim file

const withTransition = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <motion.div variants={slideUp} initial="initial" exit="exit">
                <Component {...props} />
            </motion.div>
        );
    };
};

export default withTransition;