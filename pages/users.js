import { useState } from "react"
import Link from 'next/link'
import styles from "../styles/users.module.scss"
import MainConteiner from "../components/mainConteiner"


function users({ users }) {



    return (
        <MainConteiner className={styles.container}>
            <h1 className={styles.container_link} >users</h1>
            <ul className={styles.container_list}>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}><span className={styles.container_link} >{user.name}</span></Link>

                    </li>)}

            </ul>
        </MainConteiner>

    )
}

export default users

export async function getStaticProps(context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()


    return {
        props: { users }
    }
}