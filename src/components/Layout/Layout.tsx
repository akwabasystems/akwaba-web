import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ maxWidth: "1024px", minHeight: "100vh", background: "#000", color: "white", margin: "0 auto" }}>
            <main>{children}</main>
        </div>
    );
}
