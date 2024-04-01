import classes from "./page.module.css"
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {

    const meal = getMeal(params.slug);
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
            </div>
            <p className={classes.summary}>{meal.summary}</p>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </main>

    </>
}