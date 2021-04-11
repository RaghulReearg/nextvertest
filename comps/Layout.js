import React from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import styles from "./styles.module.css"

export const Layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

