import React from 'react'
import Image from "next/image"
import Logo from "../../public/Images/logo.svg"
import styles from "../Header/header.module.scss"
import Link from "next/link"
import { motion } from "framer-motion"
export default function Header() {
  return (
    <motion.div className={styles.header} transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
    }}
    animate={{opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 1 }}>
      <div assName={styles.image}>
        <Link href={"/"}><Image src={Logo} alt="Logo" height={50} width={50} className={styles.image}/></Link>
      </div>
        <div className={styles.spacer}></div>
      <div className={styles.links}>
        <Link href={"/projects"}><span>Projects</span></Link>
        <Link href={"/guestbook"}><span>Guestbook</span></Link>
      </div>
    </motion.div>
  )
}
