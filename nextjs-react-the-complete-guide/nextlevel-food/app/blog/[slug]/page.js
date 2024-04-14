export default function BlogPostPage(props) {
    return (
        <>
            <main>
                <h1>The Blog Post</h1>
                <p>Slug: {props.params.slug}</p>
            </main>
        </>
    )
}