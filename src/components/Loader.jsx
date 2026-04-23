import React from 'react'
import { motion } from 'framer-motion'

function Loader() {
    return (
        <motion.div
            className="app-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.h1
                className="iterdx-shining-text"
                initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                IterDX Global
            </motion.h1>
        </motion.div>
    )
}

export default Loader