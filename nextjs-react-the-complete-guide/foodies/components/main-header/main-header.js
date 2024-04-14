
import Link from "next/link"
import logoImage from "/assets/logo.png"
import styles from "./main-header.module.css"
import Image from "next/image"
import MainHeaderBackground from "@/components/main-header/main-header-background";

import NavLink from "./nav-link";


export default function MainHeader() {

    return <header className={styles.header}>

        <MainHeaderBackground />
        <Link className={styles.logo} href="/">
            <Image priority src={logoImage} alt="A plate with food" />
            NextLevel Food
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li><NavLink href="/meals">Meals</NavLink></li>
                <li><NavLink href="/community">Community</NavLink></li>
            </ul>
        </nav>
    </header>
}