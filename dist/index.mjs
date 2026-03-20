"use client";
import { AppBar, Toolbar, Typography, Drawer, Box, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/components/AppLayout.tsx
function SharedAppBar({ appTitle = "App" }) {
  return /* @__PURE__ */ jsx(
    AppBar,
    {
      position: "fixed",
      sx: { zIndex: (theme) => theme.zIndex.drawer + 1 },
      children: /* @__PURE__ */ jsx(Toolbar, { children: /* @__PURE__ */ jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: appTitle }) })
    }
  );
}
var DRAWER_WIDTH = 200;
function SharedSidebar({ navItems }) {
  return /* @__PURE__ */ jsxs(
    Drawer,
    {
      variant: "permanent",
      sx: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box"
        }
      },
      children: [
        /* @__PURE__ */ jsx(Toolbar, {}),
        /* @__PURE__ */ jsx(Box, { sx: { overflow: "auto" }, children: /* @__PURE__ */ jsx(List, { children: navItems.map((item) => /* @__PURE__ */ jsx(
          ListItem,
          {
            component: "a",
            href: item.href,
            sx: {
              color: "inherit",
              textDecoration: "none",
              "&:hover": { backgroundColor: "action.hover" }
            },
            children: /* @__PURE__ */ jsx(ListItemText, { primary: item.label })
          },
          item.href
        )) }) })
      ]
    }
  );
}
function AppLayout({ children, navItems, appTitle }) {
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    /* @__PURE__ */ jsx(SharedAppBar, { appTitle }),
    /* @__PURE__ */ jsx(SharedSidebar, { navItems }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          minHeight: "100vh"
        },
        children: [
          /* @__PURE__ */ jsx(Toolbar, {}),
          children
        ]
      }
    )
  ] });
}

export { AppLayout, SharedAppBar, SharedSidebar };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map