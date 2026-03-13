import React from "react";

import PageTemplate from "../Shared/PageTemplate";

import "./contact.scss";


export default function ContactPage(props: any) {

    return (
        <PageTemplate title="Home">
            <section className="section section-contact-hero">
                <h1 className="section-title typography-hero-headline-standalone">
                    Let&apos;s Connect
                </h1>
                <div className="section-content">
                    <p className="typography-eyebrow-super hero-copy">
                        Whether you're interested in creative AI tools, immersive education, or future collaborations, we&apos;d love to hear from you.
                    </p>
                    <p className="typography-eyebrow-super hero-copy">
                        Akwaba is built around curiosity, creativity, and meaningful technology — and many great ideas begin with a simple conversation.
                    </p>
                </div>
            </section>

            <section className="section section-opportunities-to-collaborate">
                <h2 className="section-title typography-headline-super about-headline">Opportunities to Collaborate</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        We&apos;re always open to connecting with individuals and organizations who share our passion for creative AI, future learning, and practical technology solutions.
                    </p>
                    <div className="chip-subsection">
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced kawaii" data-text-gradient>Partnerships</h3>
                            <p className="typography-section-copy hero-copy">
                                We welcome partnerships with organizations exploring creative AI, digital tools, and future learning environments.
                            </p>
                            <p className="typography-section-copy hero-copy">
                                If your team is building something exciting in these spaces, let&apos;s talk.
                            </p>
                        </div>
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced avs" data-text-gradient>Education and Schools</h3>
                            <p className="typography-section-copy hero-copy">
                                Akwaba Virtual School is designed to help students explore technology, creativity, and language through immersive learning experiences.
                            </p>
                            <p className="typography-section-copy hero-copy">
                                Schools and educational programs interested in collaborating are encouraged to reach out.
                            </p>
                        </div>
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced avs" data-text-gradient>Conferences and Speaking</h3>
                            <p className="typography-section-copy hero-copy">
                                Daniel regularly explores topics around creative AI tools, immersive learning environments, and technology designed for human creativity. If you are organizing a conference or event and would like Akwaba to participate, we&apos;d be happy to connect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-direct-contact">
                <h2 className="section-title typography-headline-super about-headline">Direct Contact</h2>
                <div className="section-content">
                    <p className="typography-eyebrow-super">
                        If our vision resonates with you, we&apos;d love to hear from you.
                    </p>
                    <div className="chip-subsection">
                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced" data-text-gradient-blue>Email</h3>
                            <p className="typography-section-copy hero-copy">
                                <a href="mailto:daniel@akwabasystems.com?subject=Akwaba:%20Let's%20Connect" className="contact-link">
                                    daniel@akwabasystems.com
                                </a>
                            </p>
                        </div>

                        <div className="chip-container">
                            <h3 className="chip-headline typography-headline-reduced" data-text-gradient-blue>LinkedIn</h3>
                            <p className="typography-section-copy hero-copy">
                                <a href="https://www.linkedin.com/in/danielziaoure/" target="_blank" className="contact-link">
                                    Daniel Ziaoure&apos;s LinkedIn
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </PageTemplate >
    );
}