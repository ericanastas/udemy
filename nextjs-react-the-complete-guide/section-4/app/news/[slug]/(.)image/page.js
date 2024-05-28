
import { DUMMY_NEWS } from "../../../../dummy-news"

export default function InterceptedImagePage({ params }) {

    const newsItem = DUMMY_NEWS.find(item => item.slug === params.slug);

    if (!newsItem) notFound();


    return <>
        <h2>Intercepted</h2>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div></>
}