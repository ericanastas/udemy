import Link from "next/link";

export default function NewsPage() {

    let newsItems = [{ id: 1, url: "/news/1", name: "First News Item" },
    { id: 2, url: "/news/2", name: "Second News Item" },
    { id: 3, url: "/news/13", name: "Third News Item" }]


    return (
        <>
            <h1>News</h1>
            <ul>
                {newsItems.map(item => <li key={item.id}>
                    <Link href={item.url}>{item.name}</Link>
                </li>)}
            </ul>
        </>
    );
}
