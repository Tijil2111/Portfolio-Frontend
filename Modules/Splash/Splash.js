import React from 'react'
import styles from "../Splash/splash.module.scss"
import { motion } from "framer-motion"

export default function Splash() {
  return (
   <div className={styles.mainDiv}>
     <motion.div className={styles.container} 
     transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
    }}
    animate={{opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 1 }}>
      <div className={styles.title}>Tijil Agrawal</div>
    </motion.div>
   </div>
  )
}
