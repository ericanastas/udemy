import { DUMMY_NEWS } from "../../../dummy-news"

export default function NewDetails({ params }) {

    const newsItem = DUMMY_NEWS.find(item => item.slug === params.slug);

    return <article className="news-article">
        <header>
            <img src={`/images/news/${newsItem.image}`} />
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
    </article>

}
