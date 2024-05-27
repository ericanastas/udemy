import Link from "next/link";

import { DUMMY_NEWS } from "../../dummy-news"

export default function NewsPage() {

    return (
        <>
            <h1>News</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map(item => <li key={item.id}>
                    <Link href={`/news/${item.slug}`}>
                        <img src={`images/news/${item.image}`} alt={item.title}></img>
                        <span>{item.title}</span>
                    </Link>
                </li>)}
            </ul>
        </>
    );
}
