import { bool } from "prop-types";

export type PlatformTabKey = 'kawaii' | 'akwaba-virtual-school';
export type PlatformTab = {
    key: PlatformTabKey;
    label: string;
    path: string;
};

export const DEFAULT_PLATORM_TAB: PlatformTabKey = 'kawaii';

export const PLATFORM_TABS: Array<PlatformTab> = [
    { key: 'kawaii', label: 'Kawaii AI', path: 'kawaii' },
    { key: 'akwaba-virtual-school', label: 'Akwaba Virtual School', path: 'akwaba-virtual-school' },
];

export function parsePlatformTabFromPath(pathname: string): PlatformTabKey | null {
    const parts = pathname.split('/').filter(Boolean); // Split and filter out empty parts
    const index = parts.indexOf('platform');
    const slug = (index >= 0) ? parts[index + 1] : null;

    if (!slug) {
        return null;
    }

    const tab = PLATFORM_TABS.find(tab => tab.path === slug);
    return tab ? tab.key : null;
}
