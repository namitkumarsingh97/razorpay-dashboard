# Razorpay Dashboard (Assignment)

This project is a **static dashboard UI** built using **React, Vite, Tailwind CSS, and Material UI (MUI)**.

---

## Tech Stack

- **React (with Vite)** → Fast frontend development
- **Tailwind CSS** → Utility-first styling
- **Material UI (MUI)** → For some pre-built UI components
- **Recharts** → For charts & graphs

---

## Project Setup

### 1. Create Vite + React Project

```bash
npm create vite@latest razorpay-dashboard
cd razorpay-dashboard
npm install
```

---

### 2. Install Dependencies

```bash
npm install -D tailwindcss @tailwindcss/postcss autoprefixer
npm install @mui/material @mui/icons-material recharts
```

---

### 3. Initialize Tailwind

If `npx tailwindcss init -p` fails, manually run:

```bash
node ./node_modules/tailwindcss/lib/cli.js init
```

This created `tailwind.config.js`.

---

### 4. Configure Tailwind

Update **`tailwind.config.js`**:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 5. Configure PostCSS

Add **`postcss.config.js`**:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

---

### 6. Import Tailwind in CSS

Inside **`src/index.css`**:

```css
@import "tailwindcss";
```

---

## Project Structure

```
razorpay-dashboard/
 ┣ src/
 ┃ ┣ assets/
 ┃ ┃ ┣ razorpay_logo.svg
 ┃ ┃ ┣ razorpay-icon.svg
 ┃ ┃ ┣ react.svg
 ┃ ┃ ┗ white.png
 ┃ ┣ components/
 ┃ ┃ ┗ Dashboard.jsx
 ┃ ┣ App.jsx
 ┃ ┣ index.css
 ┃ ┗ main.jsx
 ┣ .gitignore
 ┣ eslint.config.js
 ┣ image.png
 ┣ index.html
 ┣ package-lock.json
 ┣ tailwind.config.js
 ┣ README.md
 ┣ postcss.config.js
 ┣ vite.config.js
 ┗ package.json

```

---

## Features

- Sidebar with static items (Dashboard, Earnings, Customers, Products, Reports, Settings)
- Top header with profile
- Stats cards (Revenue, Transactions, etc.)
- Charts using **Recharts**
- Responsive layout with Tailwind Grid

---

## Run Project

```bash
npm run dev
```

Project runs at:  
`http://localhost:5173`

---

## Demo Screenshot

![alt text](image.png)
