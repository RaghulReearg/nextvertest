import React from 'react'
import { Layout } from '../../comps/Layout'
import Link from "next/link"
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    return {
        props: { ninjas: data }
    }
}
const Index = ({ ninjas }) => {
    return (
        <Layout>
            <h1>Ninja Home Page</h1>
            <div>
                {ninjas.map(e => {
                    return (
                        <div className="namediv">
                            <Link href={`ninjas/${e.id}`}>{e.name}</Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Index
