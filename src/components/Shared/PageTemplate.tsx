import React, { useState, useRef } from "react";
import classnames from "classnames";
import GlobalNav from "./GlobalNav.";
import navlinks from "../../store/data/nav-links.json";

export interface PageTemplateProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function PageTemplate(props: PageTemplateProps) {
    const [expanded, setExpanded] = useState(false);

    const { className, children } = props;
    const pageContainerRef = useRef<HTMLDivElement>(null);

    function onTogglePanel(event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
        event.preventDefault();

        const panelExpanded = !expanded;
        setExpanded(panelExpanded);

        setTimeout(() => {
            if (pageContainerRef && pageContainerRef.current) {
                pageContainerRef.current.classList[panelExpanded ? "remove" : "add"]("panel-expanded");
            }
        }, 30);
    }

    return (
        <>
            <GlobalNav
                title="Akwaba"
                links={navlinks}
            />
            <section className={classnames("page-wrapper", className)} ref={pageContainerRef}>
                <div className="background-mask" />
                <section className="main-content-container">
                    <section className="main-content">
                        {children}
                    </section>
                    <section className="footer">
                    </section>
                </section>
                <aside className="contextual-panel-container" style={{ "display": "none" }}>
                    <div className="panel-wrapper">
                        <header>
                            <a onClick={onTogglePanel}>
                                <i className="icon icon-close" />
                            </a>
                        </header>
                    </div>
                    <div className="panel-content"></div>
                    <div className="controls">
                        <button onClick={onTogglePanel}>
                            <i className="icon icon-chevronleft" />
                        </button>
                    </div>
                </aside>
            </section>
        </>
    );
}

