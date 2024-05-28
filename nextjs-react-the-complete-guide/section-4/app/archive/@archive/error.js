'use client';

export default function ErrorPage({ error }) {
    return <div id="error">
        <h2>There was a problem</h2>
        <p>{error.message}</p>
    </div>
}