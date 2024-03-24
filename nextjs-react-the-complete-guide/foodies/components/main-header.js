import Link from "next/link"
import logoImage from "/assets/logo.png"

export default function MainHeader() {
    return <header><Link href="/">
        <img src={logoImage.src} alt="A plate with food" />NextLevel Food</Link>
        <nav>
            <ul>
                <li><Link href="/meals">Meals</Link></li>
                <li><Link href="/community">Community</Link></li>
            </ul>
        </nav>
    </header>
}