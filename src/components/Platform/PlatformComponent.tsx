import React, { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PlatformTabs from "./PlatformTabs";
import {
    DEFAULT_PLATORM_TAB,
    parsePlatformTabFromPath,
    PLATFORM_TABS,
    PlatformTabKey
} from './PlatformRoutes'

import KawaiiComponent from "./views/KawaiiComponent";;
import AVSComponemt from './views/AVSComponent';
import NoPlatformFound from './views/NoPlatformFound';
import PageTemplate from "../Shared/PageTemplate";


export default function PlatformComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    const activeTab = useMemo(() => {
        return parsePlatformTabFromPath(location.pathname) || DEFAULT_PLATORM_TAB;
    }, [location.pathname]);

    function selectTab(key: PlatformTabKey) {
        navigate(`/platform/${key}`);
    }

    function renderActiveView() {
        switch (activeTab) {
            case 'kawaii':
                return <KawaiiComponent />;

            case 'akwaba-virtual-school':
                return <AVSComponemt />;

            default:
                return <NoPlatformFound />;
        }
    }

    /** If the user hits the "Platform" page with no slig, load the 'Kawaii' tab */
    useEffect(() => {
        const parts = location.pathname.split('/').filter(Boolean); // Split and filter out empty parts
        const index = parts.indexOf('platform');
        const hasSlug = (index >= 0 && !!parts[index + 1]);

        if (!hasSlug) {
            navigate(`/platform/${DEFAULT_PLATORM_TAB}`, { replace: true });
        }

    }, [location.pathname, navigate]);

    return (
        <PageTemplate title="Platform">
            <PlatformTabs
                active={activeTab}
                onSelect={selectTab}
            />

            <div>
                {PLATFORM_TABS.some(tab => tab.key === activeTab) ? renderActiveView() : <NoPlatformFound />}
            </div>
        </PageTemplate>
    );
}