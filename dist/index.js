"use client";
'use strict';

var material = require('@mui/material');
var jsxRuntime = require('react/jsx-runtime');

// src/components/AppLayout.tsx
function SharedAppBar({ appTitle = "App" }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    material.AppBar,
    {
      position: "fixed",
      sx: { zIndex: (theme) => theme.zIndex.drawer + 1 },
      children: /* @__PURE__ */ jsxRuntime.jsx(material.Toolbar, { children: /* @__PURE__ */ jsxRuntime.jsx(material.Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: appTitle }) })
    }
  );
}
var DRAWER_WIDTH = 200;
function SharedSidebar({ navItems }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    material.Drawer,
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
        /* @__PURE__ */ jsxRuntime.jsx(material.Toolbar, {}),
        /* @__PURE__ */ jsxRuntime.jsx(material.Box, { sx: { overflow: "auto" }, children: /* @__PURE__ */ jsxRuntime.jsx(material.List, { children: navItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          material.ListItem,
          {
            component: "a",
            href: item.href,
            sx: {
              color: "inherit",
              textDecoration: "none",
              "&:hover": { backgroundColor: "action.hover" }
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(material.ListItemText, { primary: item.label })
          },
          item.href
        )) }) })
      ]
    }
  );
}
function AppLayout({ children, navItems, appTitle }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(material.Box, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(material.CssBaseline, {}),
    /* @__PURE__ */ jsxRuntime.jsx(SharedAppBar, { appTitle }),
    /* @__PURE__ */ jsxRuntime.jsx(SharedSidebar, { navItems }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      material.Box,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          minHeight: "100vh"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(material.Toolbar, {}),
          children
        ]
      }
    )
  ] });
}

exports.AppLayout = AppLayout;
exports.SharedAppBar = SharedAppBar;
exports.SharedSidebar = SharedSidebar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map