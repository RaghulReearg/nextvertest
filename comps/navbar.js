import React from 'react'
import styles from "./styles.module.css"
import Link from "next/link"
import Image from "next/image"
export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/logo.png" width={50} height={30} />
                <h3 style={{ margin: 0 }}>Logo</h3>
            </div>
            <div className={styles.link}>
                <Link href="/"> Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninja Feed</Link>
            </div>
        </nav>
    )
}
