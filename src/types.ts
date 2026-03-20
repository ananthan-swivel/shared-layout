import React from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface AppLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  appTitle?: string;
}

export interface SharedAppBarProps {
  appTitle?: string;
}

export interface SharedSidebarProps {
  navItems: NavItem[];
}
