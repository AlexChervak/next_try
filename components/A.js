import Link from 'next/link'
import styles from "../styles/A.module.css"

export default function ({ href, text }) {

    return (
        <Link href={href}>
            <span className={styles.link} >{text}</span>
        </Link>
    )
}

