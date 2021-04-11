import React from 'react'
import { Layout } from '../comps/Layout'
import Head from "next/head"

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja | About </title>

            </Head>
            <Layout>
                <h1>ABout Page</h1>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </Layout>
        </>
    )
}

export default About
