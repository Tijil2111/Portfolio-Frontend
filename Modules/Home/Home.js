import React from 'react'
import styles from "../Home/home.module.scss"
import { motion } from "framer-motion"
import Header from '../../Components/Header/Header'
import Link from 'next/link'
import Image from 'next/image'

import FlowingVector from "../../public/Images/vector1.svg"
import MemojiVector from "../../public/Images/vector2.svg"

export default function LandingModule() {
  return (
    <div>
      
      <Header/>
      <div className={styles.intro}>
        <motion.div className={styles.textContainer} transition={{
        duration: 1,
        delay: 0.4,
        ease: [0.5, 0.71, 1, 1.5],
    }}
    animate={{opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 1 }}>
          <div className={styles.title}>Howdy !</div>
          <div className={styles.subTitle}>I am <span>Tijil Agrawal</span></div>
          <div className={styles.description}>I am an aspiring developer and an enthusiastic guitarist... </div>
          <div className={styles.btnContainer}>
            <Link href={"/projects"}>
            <div className={styles.btn}>
              See what I am upto...
            </div></Link>
          </div>
        </motion.div>
        <div className={styles.spacer}/>
       <motion.div className={styles.img} transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.5, 0.71, 1, 1.5],
    }}
    animate={{opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 1 }}>
        <Image  src={MemojiVector} alt={"Flowing Vector"} height={400} width={400}/>
       </motion.div>


      </div>
    </div>
  )
}
