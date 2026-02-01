import React from "react";
//import Navbar from "./Navbar";
//import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ minHeight: "100vh", background: "#05060a", color: "white" }}>
            <main>{children}</main>
        </div>
    );
}
