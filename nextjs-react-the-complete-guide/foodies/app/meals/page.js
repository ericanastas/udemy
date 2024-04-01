import styles from './page.module.css'
import Link from "next/link"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react"

async function Meals() {
    let meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
}

export default function MealsPage() {


    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created
                    <span className={styles.highlight}> by you</span>
                </h1>
                <p>Choose your favorite recipie and cook it yourself!</p>
                <p className={styles.cta}><Link href="/meals/share">Share Your Favorite Recipe</Link></p>

            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>)
}