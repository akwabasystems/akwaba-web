import React, { act } from "react";
import classNames from "classnames";

import { PLATFORM_TABS, PlatformTabKey } from "./PlatformRoutes";

type PlatformTabsProps = {
    active: PlatformTabKey;
    onSelect: (key: PlatformTabKey) => void;
};


export default function PlatformTabs(props: PlatformTabsProps) {
    const { active, onSelect } = props;

    return (
        <div className="tabnav">
            <ul className="tabnav-items">
                {PLATFORM_TABS.map(t => {
                    const classList = classNames('tabnav-item', {
                        'active': active === t.key
                    });

                    return (
                        <li key={t.key} className={classList}>
                            <a href={t.path}
                                className="tabnav-link"
                                onClick={e => {
                                    e.preventDefault();
                                    onSelect(t.key);
                                }}
                            >
                                {t.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}