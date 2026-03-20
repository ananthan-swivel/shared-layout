"use client";

import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from "@mui/material";
import type { SharedSidebarProps } from "../types";

const DRAWER_WIDTH = 200;

export function SharedSidebar({ navItems }: SharedSidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.href}
              component="a"
              href={item.href}
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SharedSidebar;
