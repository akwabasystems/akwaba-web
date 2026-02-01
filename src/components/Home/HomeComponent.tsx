import React from "react";

import PageTemplate from "../Shared/PageTemplate";


export default function HomePage(props: any) {
    console.log('HomeComponent props:', props);

    return (
        <PageTemplate title="Home">
            <div style={{ maxWidth: 1024, margin: "0 auto", padding: "28px 16px" }}>
                <h1 style={{ marginTop: 0 }}>Home</h1>
                <p>Akwaba. Welcome.</p>
            </div>
        </PageTemplate>
    );
}
