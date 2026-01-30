# Base Dashboard - SaaS Dashboard

A modern, fully-responsive SaaS dashboard converted from Figma design to production-ready React code with Tailwind CSS v4.

## 🎨 Design

- **Source**: [Figma Community - SAAS Dashboard](https://www.figma.com/design/mLzr95Yi2kwGyZBc44QiV7/SAAS-Dashboard--Community-)
- **Screens**: 24 fully designed screens including Dashboard, Invoice Management, Customer Management, Board/Task Views, Calendar, Chat, and Authentication

## 🚀 Features

- **Dashboard**: Overview with statistics, charts (line & donut), recent orders, and top-selling products
- **Invoice Management**: List view with status badges, filters, and action buttons
- **Customer Management**: Customer list with detailed profile sidebar
- **Board View**: Kanban-style task management
- **Authentication**: Login, Sign Up, Password Recovery pages
- **Fully Responsive**: Mobile-first design approach
- **Modern UI Components**: Reusable button, input, badge, card, and avatar components

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 6** - Build tool
- **Tailwind CSS v4** - Utility-first CSS framework (using @theme)
- **React Router v7** - Client-side routing
- **TypeScript** - Type safety

## 📦 Installation

```bash
npm install
```

## 🏃‍♂️ Development

```bash
npm run dev
```

## 🔨 Build

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Atomic components (Button, Input, Badge, etc.)
│   └── blocks/          # Larger components (Sidebar, Layout)
├── pages/               # Route components
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── SignUp.tsx
│   ├── InvoiceList.tsx
│   ├── CustomerList.tsx
│   ├── BoardList.tsx
│   └── Placeholder.tsx
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind v4 @theme
```

## 🎨 Design Tokens

All design tokens (colors, typography, spacing) are extracted from the Figma file and implemented using Tailwind v4's `@theme` directive in `src/index.css`.

## 📝 Routes

- `/` - Dashboard
- `/login` - Login page
- `/signup` - Sign Up page
- `/invoices` - Invoice list
- `/customers` - Customer list
- `/board` - Kanban board
- And many more...

## 🌐 Preview

Live preview: [View Dashboard](https://ta-01kg6rye4fvjnme3v7f7ggsy28-5173.wo-55zmocagjyz40yzonwy330gro.w.modal.host)

## 📄 License

This project was generated from a community Figma file for educational purposes.

---

Built with ❤️ using Claude Code
