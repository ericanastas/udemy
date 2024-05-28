
import { DUMMY_NEWS } from "../../../../dummy-news"

export default function ImagePage({ params }) {

    const newsItem = DUMMY_NEWS.find(item => item.slug === params.slug);

    if (!newsItem) notFound();
    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
}