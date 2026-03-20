import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { SharedAppBar } from "./SharedAppBar";
import { SharedSidebar } from "./SharedSidebar";
import type { AppLayoutProps } from "../types";

export function AppLayout({ children, navItems, appTitle }: AppLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SharedAppBar appTitle={appTitle} />
      <SharedSidebar navItems={navItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
