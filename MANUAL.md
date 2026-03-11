# Marketplace Web — Full Control Manual

> SvelteKit + Tailwind CSS + SQLite luxury marketplace.

---

## 1. Quick Start

```bash
npm install
copy .env.example .env
npm run dev        # → http://localhost:5173
```

---

## 2. Project Structure

```
src/
├── app.css                  ← Global styles + Tailwind
├── lib/server/db.js         ← ⭐ DATABASE CONTROL CENTER
└── routes/
    ├── +layout.svelte       ← Header & Footer
    ├── +page.svelte         ← Homepage
    └── +page.server.js      ← Loads products from DB
.env                         ← Private config (never commit)
```

---

## 3. Controlling the Backend (Easy Guide)

### Add a Product

Open `src/lib/server/db.js`, find the `products` array and add:

```js
{ title: 'New Bag', price: 1800, image_url: 'YOUR_URL', category_id: 3 }
```

### Category IDs

| ID | Name     |
|----|----------|
| 1  | Women    |
| 2  | Men      |
| 3  | Handbags |
| 4  | Gifts    |

### Reset the Database

```bash
Remove-Item marketplace.db
npm run dev    # auto re-creates & re-seeds
```

### Fetch Products in Any Page

```js
// +page.server.js
import db from '$lib/server/db';
export function load() {
    return { products: db.prepare('SELECT * FROM products').all() };
}
```

---

## 4. Environment Variables (`.env`)

| Variable         | Description                | Default           |
|------------------|----------------------------|-------------------|
| `PORT`           | Server port                | `3000`            |
| `NODE_ENV`       | `production` when live     | `production`      |
| `DATABASE_PATH`  | Path to `.db` file         | `./marketplace.db`|
| `SESSION_SECRET` | Cookie signing secret      | **Change this!**  |

---

## 5. Build for Production

```bash
npm run build
node build/index.js      # runs on PORT in .env
```

---

## 6. Deploy to VPS

```bash
# On your server:
git clone <your-repo>
npm install
npm run build

# Keep running with PM2:
npm install -g pm2
pm2 start build/index.js --name marketplace
pm2 save && pm2 startup
```

**Nginx reverse proxy:**
```nginx
location / { proxy_pass http://localhost:3000; }
```

---

## 7. Push Updates to GitHub

```bash
git add -A
git commit -m "your changes"
git push
```

---

## 8. Commands Reference

| Command                     | Action                          |
|-----------------------------|---------------------------------|
| `npm run dev`               | Dev server with hot reload      |
| `npm run build`             | Build for production            |
| `node build/index.js`       | Run production server           |
| `npm run check`             | Type-check Svelte files         |
| `Remove-Item marketplace.db`| Reset the database              |
