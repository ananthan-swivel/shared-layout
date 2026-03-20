# @smata/ui-layout

Shared MUI AppBar + Sidebar layout components for React and Next.js apps.

## Installation

```bash
# Install from GitHub
npm install github:ananthan-swivel/shared-layout

# Or from npm (once published)
npm install @smata/ui-layout
```

## Peer Dependencies

Make sure these are installed in your project:

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

## Usage

### Next.js (app router — `layout.tsx`)

```tsx
// src/app/layout.tsx
import "./globals.css";
import { AppLayout, NavItem } from "@smata/ui-layout";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
  { label: "LogSync", href: "/logsync" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppLayout navItems={NAV_ITEMS} appTitle="My App">
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
```

### Create React App / Vite

```tsx
// src/App.tsx
import { AppLayout, NavItem } from "@smata/ui-layout";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
];

function App() {
  return (
    <AppLayout navItems={NAV_ITEMS} appTitle="My App">
      <p>Page content here</p>
    </AppLayout>
  );
}

export default App;
```

## Components

### `<AppLayout>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Main page content |
| `navItems` | `NavItem[]` | — | Sidebar navigation links |
| `appTitle` | `string` | `"App"` | Title shown in the AppBar |

### `<SharedAppBar>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `appTitle` | `string` | `"App"` | Title shown in the AppBar |

### `<SharedSidebar>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navItems` | `NavItem[]` | — | Array of `{ label, href }` objects |

### `NavItem`

```ts
interface NavItem {
  label: string;
  href: string;
}
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Type check only
npm run type-check
```

## License

MIT
