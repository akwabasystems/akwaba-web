import React from "react";

import ImageCarousel from "@/components/UI/ImageCarousel";
import { carouselImages } from "./carouselImages";

import kawaiiIcon from "../../../images/kawai-icon-180.png";
import beesAtWork from "../../../images/bees-at-work.jpg";


export default function KawaiiComponent() {

    return (
        <>
            <section className="section section-kawaii-hero">
                <figure className="kawaii-icon">
                    <img src={kawaiiIcon} alt="Kawaii AI" className="kawaii-hero-icon" />
                </figure>
                <h1 className="section-title typography-hero-headline-standalone">
                    Create without limits.
                </h1>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy">
                        Kawaii AI transforms simple prompts into expressive, portfolio-worthy images—built for creators, designers, and the curious.
                    </p>
                    <p className="typography-eyebrow-super hero-copy">
                        From anime portraits to abstract dreamscapes, Kawaii AI blends curated styles with powerful generation to help you explore ideas faster—and beautifully.
                    </p>
                    <ul className="cta-list-items list-nobullet typography-hero-cta">
                        <li className="list-item cta-container explore-platform">
                            <a href="https://apps.apple.com/us/app/kawaii-ai/id6661018939" target="_blank" aria-label="Explore Kawaii AI" className="app-store-link">
                                Explore on the App Store
                            </a>
                        </li>
                    </ul>
                </div>
            </section >

            <section className="section section-what-makes-kawaii-different">
                <h2 className="section-title typography-headline-super platform-headline">What Makes Kawaii AI Different</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        More than image generation.
                    </p>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Curated Styles</h3>
                        <p className="typography-section-copy hero-copy">
                            Carefully crafted visual categories—from Anime to Chiaroscuro—so you don&apos;t start from chaos.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Fast Iteration</h3>
                        <p className="typography-section-copy hero-copy">
                            Generate, remix, refine. Creative momentum should never stall.
                        </p>
                    </div>

                    <div className="chip-container">
                        <h3 className="chip-headline typography-headline-reduced platform-feature" data-text-gradient>Built for Remix</h3>
                        <p className="typography-section-copy hero-copy">
                            Discover prompts, adapt ideas, and evolve images into something uniquely yours.
                        </p>
                    </div>

                </div>
            </section>

            <section className="section section-visual-showcase">
                <h2 className="section-title typography-headline-super platform-headline">Visual Showcase</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        See what&apos;s possible.
                    </p>
                    <div className="carousel-container">
                        <ImageCarousel
                            items={carouselImages}
                            title="Kawaii AI visual showcase"
                            autoPlay={false}
                            showDots={true}
                            showArrows={true}
                        />
                    </div>
                </div>
            </section>

            <section className="section section-creative-confidence">
                <h2 className="section-title typography-headline-super platform-headline">Designed for Creative Confidence</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        Creative power, simplified.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        AI tools shouldn&apos;t feel overwhelming. Kawaii AI is designed to help you move from idea to output with clarity. No complex controls. No endless parameter tuning. Just clear prompts and beautiful results.
                    </p>
                    <p className="typography-section-copy hero-copy">
                        Express your creativity with confidence, and let Kawaii AI handle the rest.
                    </p>
                    <div className="bullet-list-container">
                        <ul className="bullet-list-items">
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Short, readable prompts</span>. Focus on concepts, not syntax.
                                </p>
                            </li>
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Confidence-building output.</span> Start with strong, inspiring results that encourage exploration, not confusion.
                                </p>
                            </li>
                            <li className="bullet-list-item">
                                <p className="typography-section-highlight-copy">
                                    <span className="highlight">Visual clarity first.</span> Prioritize clean, compelling images over technical complexity.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section section-from-play-to-portfolio">
                <h2 className="section-title typography-headline-super platform-headline">From Play to Portfolio</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        From playful experiments to polished results.
                    </p>

                    <p className="typography-section-copy hero-copy">
                        Whether you&apos;re exploring concepts, building references, or creating social content, Kawaii AI helps you move quickly—from inspiration to impact.
                    </p>
                    <figure className="splash-image">
                        <img src={beesAtWork} alt="Bees at work" />
                    </figure>
                </div>
            </section>

            <section className="section section-contact">
                <h2 className="section-title typography-headline-super platform-headline">Ready to Create?</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy">
                        Are you ready to explore the creative possibilities of Kawaii AI? Download it now on the App Store and start generating your own unique images.
                    </p>
                    <div className="cta-container">
                        <a href="https://apps.apple.com/us/app/kawaii-ai/id6661018939" target="_blank" aria-label="Explore Kawaii AI" className="app-store-link">
                            Explore on the App Store
                        </a>
                    </div>
                </div>
            </section>
        </>
    );

}
