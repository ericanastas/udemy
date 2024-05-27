import { getNewsForYear } from "../../../../lib/news"
import NewsList from "@/components/NewsList";

export default function FilteredNewsPage({ params }) {
    const newsOfYear = getNewsForYear(params.year);
    return <NewsList news={newsOfYear} />
}