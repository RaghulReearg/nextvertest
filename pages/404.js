import React from 'react'
import { useEffect } from "react"
import { useRouter } from "next/router"
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {

        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])
    return (
        <div className="notfound">
            {/* <div className="spinner">
                <div></div>
                <div></div>
            </div> */}
            <div className="spinner2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3>Page Not Found</h3>
        </div>
    )
}

export default NotFound
