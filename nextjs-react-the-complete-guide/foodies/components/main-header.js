import Link from "next/link"
import logoImage from "/assets/logo.png"
import styles from "./main-header.module.css"

export default function MainHeader() {
    return <header className={styles.header}>
        <Link className={styles.logo} href="/">
            <img src={logoImage.src} alt="A plate with food" />NextLevel Food
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/meals">Meals</Link></li>
                <li><Link href="/community">Community</Link></li>
            </ul>
        </nav>
    </header>
}