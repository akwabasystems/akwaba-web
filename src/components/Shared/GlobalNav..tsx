import React from "react";
import NavLinks from "./NavLinks";

import type { NavLinkType } from "./NavLinks";
import "./global-nav.scss";

export interface GlobalNavProps {
    title: string;
    links: NavLinkType[];
    history?: object;
}


export default function GlobalNav(props: GlobalNavProps) {
    const { title, links } = props;

    return (
        <section className="global-nav-wrapper">
            <input type="checkbox" id="global-nav-menu-state" className="global-nav-menu-state" />
            <nav className="main-nav" role="navigation" aria-label="Main Navigation">
                <div className="nav-wrapper">
                    <div className="nav-content">
                        <div className="row">
                            <div className="column small-2 medium-3 small-show medium-hide action-wrapper menu-icon">
                                <label className="menu-icon-label" htmlFor="global-nav-menu-state"
                                    aria-hidden="true">
                                    <span className="menu-icon-bread menu-icon-bread-top">
                                        <span className="menu-icon-bread-crust menu-icon-bread-crust-top" />
                                    </span>
                                    <span className="menu-icon-bread menu-icon-bread-bottom">
                                        <span className="menu-icon-bread-crust menu-icon-bread-crust-bottom" />
                                    </span>
                                </label>
                            </div>
                            <div className="column small-12 medium-2 logo-wrapper">
                                <h2 className="nav-title">
                                    <a href="/">
                                        <span className="localnav-title icon" />{title}
                                    </a>
                                </h2>
                            </div>
                            <div className="column small-12 medium-10 nav-menu">
                                <NavLinks links={links} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
