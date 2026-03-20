"use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import type { SharedAppBarProps } from "../types";

export function SharedAppBar({ appTitle = "App" }: SharedAppBarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {appTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SharedAppBar;
