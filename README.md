# Kayapa — Inventory & POS

Responsive React + Vite frontend for a **single shop** inventory and point-of-sale workflow. It is not a multi-shop or multi-vendor system.

## Structure
- `src/components/layout/` — shared sidebar and application layout
- `src/components/common/` — page header, reusable stat card and status badge
- `src/components/inventory/` — product create/edit modal
- `src/components/categories/` — category create/edit modal
- `src/pages/` — Overview, Inventory, Categories, POS, Orders, Reports and Settings
- `src/data/` — sample products, categories and orders
- `src/styles/` — global styling and responsive breakpoints

## Run
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Prototype scope
- Add/edit products and add/edit/delete categories are wired to React state.
- POS cart supports quantity changes, discounts and demo checkout; completed sales update stock and appear in Orders.
- Orders can be exported as CSV.
- Data is held in memory and resets on refresh. No backend/database, login, real payment gateway, receipt printing or barcode hardware integration is connected.
- UI currency is displayed in Ghana cedis (GH₵).
