import Link from "next/link"
import logoImage from "/assets/logo.png"
import styles from "./main-header.module.css"
import Image from "next/image"
import MainHeaderBackground from "@/components/main-header/main-header-background";


export default function MainHeader() {
    return <header className={styles.header}>

        <MainHeaderBackground />
        <Link className={styles.logo} href="/">
            <Image priority src={logoImage} alt="A plate with food" />
            NextLevel Food
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/meals">Meals</Link></li>
                <li><Link href="/community">Community</Link></li>
            </ul>
        </nav>
    </header>
}