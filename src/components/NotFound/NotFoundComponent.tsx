import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "28px 16px" }}>
            <h1 style={{ marginTop: 0 }}>404</h1>
            <p>That page doesn’t exist.</p>
            <Link to="/" style={{ color: "white" }}>Go home</Link>
        </div>
    );
}
