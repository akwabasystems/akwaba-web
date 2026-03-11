import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

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

    function getActivePage() {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const topLevelPath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '/';

        switch (topLevelPath) {
            case '/':
                return 'home';

            case '/platform':
                return 'platform';

            default:
                return null;
        }
    }

    return (
        <ul className="menu-items medium-9">
            {
                links.map((link) => {
                    const activePage = getActivePage();

                    return (
                        <li key={link.id}
                            className={`menu-item item-${link.id}`}>
                            <NavLink
                                id={`navlink-${link.id}`}
                                to={link.url}
                                className={classNames("menu-link", {
                                    'active': activePage === link.id
                                })}
                            >
                                <span>{link.title}</span>
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
}