'use strict';

var Box2 = require('@mui/material/Box');
var CssBaseline = require('@mui/material/CssBaseline');
var Toolbar = require('@mui/material/Toolbar');
var AppBar = require('@mui/material/AppBar');
var Typography = require('@mui/material/Typography');
var jsxRuntime = require('react/jsx-runtime');
var Drawer = require('@mui/material/Drawer');
var List = require('@mui/material/List');
var ListItem = require('@mui/material/ListItem');
var ListItemText = require('@mui/material/ListItemText');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Box2__default = /*#__PURE__*/_interopDefault(Box2);
var CssBaseline__default = /*#__PURE__*/_interopDefault(CssBaseline);
var Toolbar__default = /*#__PURE__*/_interopDefault(Toolbar);
var AppBar__default = /*#__PURE__*/_interopDefault(AppBar);
var Typography__default = /*#__PURE__*/_interopDefault(Typography);
var Drawer__default = /*#__PURE__*/_interopDefault(Drawer);
var List__default = /*#__PURE__*/_interopDefault(List);
var ListItem__default = /*#__PURE__*/_interopDefault(ListItem);
var ListItemText__default = /*#__PURE__*/_interopDefault(ListItemText);

// src/components/AppLayout.tsx
function SharedAppBar({ appTitle = "App" }) {
  return /* @__PURE__ */ jsxRuntime.jsx(AppBar__default.default, { position: "fixed", sx: { zIndex: (theme) => theme.zIndex.drawer + 1 }, children: /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, { children: /* @__PURE__ */ jsxRuntime.jsx(Typography__default.default, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: appTitle }) }) });
}
var DRAWER_WIDTH = 200;
function SharedSidebar({ navItems }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Drawer__default.default,
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
        /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, {}),
        /* @__PURE__ */ jsxRuntime.jsx(Box2__default.default, { sx: { overflow: "auto" }, children: /* @__PURE__ */ jsxRuntime.jsx(List__default.default, { children: navItems.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          ListItem__default.default,
          {
            component: "a",
            href: item.href,
            sx: {
              color: "inherit",
              textDecoration: "none",
              "&:hover": { backgroundColor: "action.hover" }
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(ListItemText__default.default, { primary: item.label })
          },
          item.href
        )) }) })
      ]
    }
  );
}
function AppLayout({ children, navItems, appTitle }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Box2__default.default, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(CssBaseline__default.default, {}),
    /* @__PURE__ */ jsxRuntime.jsx(SharedAppBar, { appTitle }),
    /* @__PURE__ */ jsxRuntime.jsx(SharedSidebar, { navItems }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      Box2__default.default,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          minHeight: "100vh"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Toolbar__default.default, {}),
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