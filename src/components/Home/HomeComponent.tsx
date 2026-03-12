import React from "react";

import PageTemplate from "../Shared/PageTemplate";

import "./home.scss";


export default function HomePage(props: any) {

    return (
        <PageTemplate title="Home">
            <section className="section section-home-hero">
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
                <h2 className="section-title typography-headline-super platform-headline">One platform.<br />Two lanes.</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super large-10 medium-12">
                        Akwaba brings together products and initiatives that share the same foundation: creativity,
                        learning, and applied intelligence.
                    </p>
                    <div className="chip-subsection">
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced kawaii" data-text-gradient>Kawaii AI</h3>
                            <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                                Create standout AI art with curated styles and simple prompts.
                            </p>
                            <div className="cta-container">
                                <a href="/platform/kawaii" aria-label="Explore Kawaii AI" role="button" className="button button-elevated button-neutral">
                                    Explore Kawaii AI
                                </a>
                            </div>
                        </div>
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced avs" data-text-gradient>Akwaba Virtual School</h3>
                            <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                                Project-based learning built for modern skills—AI, creativity, and tech.
                            </p>
                            <div className="cta-container">
                                <a href="/platform/akwaba-virtual-school" aria-label="Explore Akwaba Virtual School" role="button" className="button button-elevated button-neutral">
                                    Explore Akwaba Virtual School
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section section-technology">
                <h2 className="section-title typography-headline-super platform-headline">Technology should feel empowering.</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super large-10 medium-12">
                        Akwaba is built on a simple idea: the best tools don&apos;t just “work”&mdash;they help people
                        move faster, think clearer, and create better. We build with taste, structure, and long-term craft.
                    </p>
                    <p className="typography-eyebrow-super large-10 medium-12">
                        We believe in the following principles when it comes to building technology that empowers people:
                    </p>
                    <div className="bullet-list-container">
                        <ul className="bullet-list-items">
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Make it usable.</span> Design tools people understand instinctively, not manuals they have to learn.
                                </p>
                            </li>
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Make it beautiful.</span> Treat design as a feature, not decoration.
                                </p>
                            </li>
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Make it real.</span> Build systems that work in practice, not just in theory.
                                </p>
                            </li>
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Make it scalable.</span> Create foundations that grow without breaking.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-why-akwaba">
                <h2 className="section-title typography-headline-super platform-headline">Why Akwaba</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super large-10 medium-12">
                        From creativity to capability.
                    </p>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Create</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Generate, remix, and explore new styles with tools like Kawaii AI.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Learn</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Build modern skills through structured, project-based learning with Akwaba Virtual School.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Build</h3>
                        <p className="typography-section-copy large-10 medium-12 small-11 hero-copy">
                            Ship practical AI solutions and automation through Coregenix AI.
                        </p>
                    </div>

                </div>
            </section>

            <section className="section section-pipeline">
                <h2 className="section-title typography-headline-super platform-headline">What we&apos;re building right now</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super large-10 medium-12">
                        Kawaii AI is live and evolving. Akwaba Virtual School is being built in phases. Coregenix AI delivers practical AI work now.
                    </p>
                </div>
            </section>

            <section className="section section-contact">
                <h2 className="section-title typography-headline-super platform-headline">Want to collaborate?</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy large-10 medium-12">
                        Whether you’re a creator, a learner, or a team looking to build something intelligent&mdash;Akwaba is open to partners,
                        early adopters, and bold projects.
                    </p>
                    <div className="cta-container">
                        <a href="/contact" aria-label="Contact Us" role="button" className="button button-elevated button-neutral">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

        </PageTemplate >
    );
}
