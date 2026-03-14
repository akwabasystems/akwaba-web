import React from "react";
import { NavLink } from "react-router-dom";

import PageTemplate from "../Shared/PageTemplate";

import "./about.scss";


export default function AboutPage(props: any) {

    return (
        <PageTemplate title="Home">
            <section className="section section-about-hero">
                <h1 className="section-title typography-hero-headline-standalone">
                    Technology should empower creativity and learning.
                </h1>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy">
                        Akwaba builds thoughtful technology that helps people create, explore, and learn with confidence.
                    </p>
                    <p className="typography-eyebrow-super hero-copy">
                        From AI-powered creative tools to immersive educational platforms, our mission is simple:
                    </p>
                    <p className="typography-eyebrow-super hero-copy">
                        <strong>to build products that expand human potential through intelligent design and accessible technology.</strong>
                    </p>
                </div>
            </section >

            <section className="section section-our-vision">
                <h2 className="section-title typography-headline-super platform-headline">Our Vision</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        A future where technology amplifies curiosity.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Technology is often built around complexity.
                        At Akwaba, we believe it should be built around people.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Our vision is a world where technology empowers creativity, learning, and discovery—helping individuals move from curiosity to capability.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        We design tools that inspire exploration, support learning, and unlock new ways to express ideas.
                    </p>
                </div>
            </section>

            <section className="section section-what-were-building">
                <h2 className="section-title typography-headline-super about-headline">What We&apos;re Building</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        Akwaba is developing a platform of products focused on creativity and education.
                    </p>
                    <div className="chip-subsection">
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced kawaii" data-text-gradient>Kawaii AI</h3>
                            <p className="typography-section-copy hero-copy">
                                A creative AI tool designed to help anyone generate expressive images from simple prompts.
                                With curated styles and fast iteration, Kawaii AI turns ideas into visuals in seconds.
                            </p>
                            <div className="cta-container">
                                <NavLink
                                    id="platform-explore-platform-kawaii"
                                    to="/platform/kawaii"
                                >
                                    <button aria-label="Explore Kawaii AI" className="button button-elevated button-neutral">
                                        Explore Kawaii AI
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced avs" data-text-gradient>Akwaba Virtual School</h3>
                            <p className="typography-section-copy hero-copy">
                                An immersive learning environment designed to help children explore technology, language, and creativity through interactive experiences.
                            </p>
                            <p className="typography-section-copy hero-copy">
                                Our goal is to build a learning platform where students don&apos;t just study information—they experience it.
                            </p>
                            <div className="cta-container">
                                <NavLink
                                    id="platform-explore-platform-kawaii"
                                    to="/platform/akwaba-virtual-school"
                                >
                                    <button aria-label="Explore Akwaba Virtual School" className="button button-elevated button-neutral">
                                        Explore Akwaba Virtual School
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-our-philosophy">
                <h2 className="section-title typography-headline-super platform-headline">Our Philosophy</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        At Akwaba, we follow a simple set of principles when designing products:
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

            <section className="section section-why-akwaba-exists">
                <h2 className="section-title typography-headline-super platform-headline">Why Akwaba Exists</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        Curiosity is the starting point of every breakthrough.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Children ask questions. <br />
                        Creators explore ideas.<br />
                        Learners experiment with possibilities.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        But too often, the tools available to them are complex, inaccessible, or uninspiring.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Akwaba exists to build technology that encourages curiosity and turns exploration into capability.
                    </p>
                </div>
            </section>

            <section className="section section-looking-ahead">
                <h2 className="section-title typography-headline-super platform-headline">Looking Ahead</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        The Akwaba platform is just beginning.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        As we continue building, our goal is to expand the platform with new products and learning experiences that help people create, learn, and innovate in meaningful ways.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        This is only the beginning of what we believe technology can become when it is designed with curiosity, creativity, and humanity at its core.
                    </p>
                </div>
            </section>

            <section className="section section-founder">
                <h2 className="section-title typography-headline-super platform-headline">Founder</h2>
                <div className="section-content">
                    <p className="typography-section-copy hero-copy">
                        Akwaba was founded by <a href="https://www.linkedin.com/in/danielziaoure/" target="_blank" rel="noopener noreferrer" className="founder-link"><strong>Daniel Ziaoure</strong></a>, a technologist and entrepreneur focused on building thoughtful software platforms that combine creativity, education, and intelligent technology.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        With years of experience building large-scale software systems, Daniel founded Akwaba to explore how modern technology — especially AI and immersive interfaces — can empower people to create, learn, and discover.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Through products like <strong>Kawaii AI</strong> and <strong>Akwaba Virtual School</strong>, Akwaba aims to build tools that transform curiosity into capability.
                    </p>
                </div>
            </section>

        </PageTemplate >
    );
}