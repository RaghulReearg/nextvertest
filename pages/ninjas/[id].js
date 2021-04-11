import React from 'react'
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json();
    return {
        props: { ninja: data }
    }
}
const Details = ({ ninja }) => {
    return (
        <div className="details">
            <h1>Detais {ninja.name}</h1>
            <p>{ninja.username}</p>
            <p>{ninja.email}</p>
        </div>
    )
}

export default Details
