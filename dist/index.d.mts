import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface NavItem {
    label: string;
    href: string;
}
interface AppLayoutProps {
    children: React.ReactNode;
    navItems: NavItem[];
    appTitle?: string;
}
interface SharedAppBarProps {
    appTitle?: string;
}
interface SharedSidebarProps {
    navItems: NavItem[];
}

declare function AppLayout({ children, navItems, appTitle }: AppLayoutProps): react_jsx_runtime.JSX.Element;

declare function SharedAppBar({ appTitle }: SharedAppBarProps): react_jsx_runtime.JSX.Element;

declare function SharedSidebar({ navItems }: SharedSidebarProps): react_jsx_runtime.JSX.Element;

export { AppLayout, type AppLayoutProps, type NavItem, SharedAppBar, type SharedAppBarProps, SharedSidebar, type SharedSidebarProps };
