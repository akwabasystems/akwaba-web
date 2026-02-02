import React from "react";

import PageTemplate from "../Shared/PageTemplate";

import "./home.scss";


export default function HomePage(props: any) {
    console.log('HomeComponent props:', props);

    return (
        <PageTemplate title="Home">
            <section className="section section-hero">
                <h1 className="section-title typography-hero-headline-standalone">
                    Build creative, intelligent experiences.
                </h1>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Akwaba is a platform for creative AI products, future-ready learning, and
                        practical AI solutions—built to help people create, learn, and build with
                        confidence.
                    </p>
                    <ul className="cta-list-items list-nobullet typography-hero-cta">
                        <li className="list-item cta-container explore-platform">
                            <a href="/platform/kawaii" aria-label="Explore the Platform" role="button" className="button button-elevated button-neutral">
                                Explore the Platform
                            </a>
                        </li>
                        <li className="list-item cta-container contact-us">
                            <a href="/contact" aria-label="Contact Us" role="button" className="button button-elevated button-neutral">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </section >

            <section className="section section-platform">
                <h2 className="typography-headline-super platform-headline">One platform. Two lanes.</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Akwaba brings together products and initiatives that share the same foundation: creativity,
                        learning, and applied intelligence.
                    </p>
                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow kawaii">Kawaii</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Create standout AI art with curated styles and simple prompts.
                        </p>
                        <div className="action-container">
                            <a href="/platform/*" aria-label="Explore the Platform" role="button" className="button button-elevated button-neutral">
                                <span className="icon icon-copy">Download Kawaii</span>
                            </a>
                        </div>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow avs">Akwaba Virtual School</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Project-based learning built for modern skills—AI, creativity, and tech.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-technology">
                <h2 className="typography-headline-super platform-headline">Technology should feel empowering.</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Akwaba is built on a simple idea: the best tools don&apos;t just “work”&mdash;they help people
                        move faster, think clearer, and create better. We build with taste, structure, and long-term craft.
                    </p>
                    <div className="bullet-list-container">
                        <div>
                            <p className="chip-copy typography-bullet-point">Make it usable</p>
                            <p className="chip-copy typography-bullet-point">Make it beautiful </p>
                            <p className="chip-copy typography-bullet-point">Make it real</p>
                            <p className="chip-copy typography-bullet-point">Make it scalable</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-why-akwaba">
                <h2 className="typography-headline-super platform-headline">Why Akwaba</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        From creativity to capability.
                    </p>
                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow kawaii">Create</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Generate, remix, and explore new styles with tools like Kawaii.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow avs">Learn</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Build modern skills through structured, project-based learning with Akwaba Virtual School.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow avs">Build</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Ship practical AI solutions and automation through Coregenix.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-technology">
                <h2 className="typography-headline-super platform-headline">What we’re building right now</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Kawaii AI is live and evolving. Akwaba Virtual School is being built in phases. Coregenix delivers practical AI work now.
                    </p>
                </div>
            </section>

            <section className="section section-platform">
                <h2 className="typography-headline-super platform-headline">Want to collaborate?</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Whether you’re a creator, a learner, or a team looking to build something intelligent&mdash;Akwaba is open to partners,
                        early adopters, and bold projects.
                    </p>
                    <div className="action-container">
                        <a href="/platform/*" aria-label="Explore the Platform" role="button" className="button button-elevated button-neutral">
                            <span className="icon icon-copy">Contact Us</span>
                        </a>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-section-eyebrow avs">Akwaba Virtual School</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Project-based learning built for modern skills—AI, creativity, and tech.
                        </p>
                    </div>
                </div>
            </section>

        </PageTemplate >
    );
}
