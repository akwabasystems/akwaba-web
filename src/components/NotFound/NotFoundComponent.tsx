import React from "react";

import PageTemplate from "../Shared/PageTemplate";
import PageNotFoundIcon from "../../images/page-not-found.png";

import "./not-found.scss";

export default function NotFoundPage() {
    return (
        <PageTemplate title="Home">
            <section className="section section-404">
                <div className="section-content">
                    <figure>
                        <img src={PageNotFoundIcon} alt="Page Not Found" />
                    </figure>
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        That page doesn&apos;t exist
                    </p>
                    <ul className="cta-list-items list-nobullet typography-hero-cta">
                        <li className="list-item cta-container explore-platform">
                            <a href="/" aria-label="Go Home" role="button" className="button button-elevated button-neutral">
                               Back to Home
                            </a>
                        </li>
                    </ul>
                </div>
            </section >
        </PageTemplate>
    );
}
