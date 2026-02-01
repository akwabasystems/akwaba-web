import React from "react";
import { NavLink } from "react-router-dom";

export type NavLinkType = {
    id: string;
    url: string;
    title: string;
}

export interface NavLinksProps {
    links: NavLinkType[];
    activeClassName?: string;
}


export default function NavLinks(props: NavLinksProps) {
    const { links } = props;

    return (
        <ul className="menu-items medium-9">
            {
                links.map((link) => (
                    <li key={link.id}
                        className={`menu-item item-${link.id}`}>
                        <NavLink
                            id={`navlink-${link.id}`}
                            to={link.url}
                            className="menu-link"
                        >
                            <span>{link.title}</span>
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
}