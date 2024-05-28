import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "../../../../lib/news"
import NewsList from "@/components/NewsList";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
    let links = getAvailableNewsYears();

    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;

    if (selectedYear && !selectedMonth) {
        links = getAvailableNewsMonths(selectedYear);
        news = getNewsForYear(selectedYear);
    }
    else if (selectedYear & selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for selected period!</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return (<>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                        return <li key={link}>
                            <Link href={href}>{link}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>);
}