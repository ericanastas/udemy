import { getAllNews } from "../../lib/news"
import NewsList from "@/components/NewsList";


export default function NewsPage() {

    let news = getAllNews();

    return (
        <>
            <h1>News</h1>
            <NewsList news={news} />
        </>
    );
}
