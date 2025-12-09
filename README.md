# Comfy Store | E-Commerce Platform - React, Vite, Redux Toolkit FullStack Project

An advanced, modern eCommerce web application built with React, Vite, Redux Toolkit, TailwindCSS, DaisyUI, and more. This project demonstrates a real-world online shop with a rich set of features, clean project structure, and best practices for state management, UI, and API integration.

- **Live Demo:** [https://ecommerce-comfy-arnob.netlify.app/](https://ecommerce-comfy-arnob.netlify.app/)

<img width="1125" alt="Screenshot 2025-02-25 at 16 26 43" src="https://github.com/user-attachments/assets/9cecb6cc-6dd5-4944-ae68-d7b1ec53d67a" /> <img width="1101" alt="Screenshot 2025-02-25 at 16 26 56" src="https://github.com/user-attachments/assets/c7ed2baa-9b44-445e-b5d0-a574b5adf7d1" /> <img width="1105" alt="Screenshot 2025-02-25 at 16 28 17" src="https://github.com/user-attachments/assets/78dc6803-3afa-46d4-9602-80d3d4f4430d" /> <img width="1101" alt="Screenshot 2025-02-25 at 16 28 37" src="https://github.com/user-attachments/assets/0414051f-2d85-4c38-97be-1b6ba231a04d" /> <img width="1114" alt="Screenshot 2025-02-25 at 16 29 21" src="https://github.com/user-attachments/assets/96f92595-a8aa-4b53-83ad-26f535bc7fd1" /> <img width="403" alt="Screenshot 2025-02-25 at 16 29 30" src="https://github.com/user-attachments/assets/5b346957-d97d-49aa-92dd-4f2c9afd46b0" /> <img width="1106" alt="Screenshot 2025-02-25 at 16 29 54" src="https://github.com/user-attachments/assets/1cca2809-225f-4226-8ce2-df1d2f20ece7" /> <img width="1105" alt="Screenshot 2025-02-25 at 16 30 23" src="https://github.com/user-attachments/assets/ca100a98-b9a0-4b30-b4b2-45ed8eadaec7" />

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [API Reference](#api-reference)
- [Routing Overview](#routing-overview)
- [Component Walkthrough](#component-walkthrough)
- [Step-by-Step Learning & Code Examples](#step-by-step-learning--code-examples)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Summary

**eCommerce-Comfy** is a comprehensive, fully responsive eCommerce platform. It's designed to teach and showcase modern React development, advanced state management with Redux Toolkit, and seamless API integrations. The UI is styled with TailwindCSS and DaisyUI for a clean, mobile-friendly look. This project is ideal for developers seeking to learn about scalable front-end architectures, reusable components, and robust user authentication and product management.

---

## Features

- **Product Listings & Details:** Browse, filter, and paginate products.
- **User Authentication:** Register, login, guest user access.
- **Shopping Cart:** Add, remove, and update cart items. Cart totals and checkout flow.
- **Order Management:** View orders after checkout (mocked for demo).
- **Filtering & Sorting:** Filter products by category, price, etc.
- **Pagination:** Multiple pagination strategies included.
- **Dark/Light Theme Toggle:** DaisyUI for instant theme switching.
- **API Integration:** Fetch products and manage orders via [Public API](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi).
- **Responsive Design:** Mobile-friendly layouts and navigation.
- **State Management:** Redux Toolkit & React Query for efficient data handling.
- **Modern Routing:** React Router v6 with nested routes and error boundaries.
- **Custom Form Components:** Reusable form elements with DaisyUI styles.
- **Deployment Ready:** Easily deployable (e.g., Netlify).

---

## Technologies Used

- **React 18+**
- **Vite** (development/build tool)
- **Redux Toolkit** (`@reduxjs/toolkit`)
- **React Redux** (`react-redux`)
- **Redux Thunk** (async actions)
- **React Query** (`@tanstack/react-query`)
- **TailwindCSS** & **DaisyUI**
- **React Router v6**
- **Axios** (for API calls)
- **Dayjs** (date handling)
- **React Icons**
- **React Toastify** (user notifications)
- **Netlify** (deployment)

---

## Project Structure

```
eCommerce-Comfy
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── hero1.webp
│   │   ├── hero2.webp
│   │   ├── hero3.webp
│   │   └── hero4.webp
│   ├── components
│   │   ├── CartItem.jsx
│   │   ├── CartItemsList.jsx
│   │   ├── CartTotals.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── ComplexPaginationContainer.jsx
│   │   ├── ErrorElement.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Filters.jsx
│   │   ├── FormCheckbox.jsx
│   │   ├── FormInput.jsx
│   │   ├── FormRange.jsx
│   │   ├── FormSelect.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Loading.jsx
│   │   ├── NavLinks.jsx
│   │   ├── Navbar.jsx
│   │   ├── OrdersList.jsx
│   │   ├── PaginationContainer.jsx
│   │   ├── ProductsContainer.jsx
│   │   ├── ProductsGrid.jsx
│   │   ├── ProductsList.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SubmitBtn.jsx
│   │   └── index.js
│   ├── features
│   │   ├── cart
│   │   │   └── cartSlice.js
│   │   └── user
│   │       └── userSlice.js
│   ├── pages
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Error.jsx
│   │   ├── HomeLayout.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── Products.jsx
│   │   ├── Register.jsx
│   │   ├── SingleProduct.jsx
│   │   └── index.js
│   ├── store.js
│   ├── utils
│   │   ├── index.js
│   │   └── customFetch.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── tailwind.config.cjs
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/arnobt78/eCommerce-Comfy-Online-Shop--ReactVite-ReduxToolkit.git
   cd eCommerce-Comfy-Online-Shop--ReactVite-ReduxToolkit
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app should now be running at `http://localhost:5173/` (default Vite port).

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## API Reference

- **API Docs:** [Product & Orders API](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)

The app interacts with a public REST API for product data and (mock) order submission. API endpoints are consumed via Axios and React Query for efficient fetching, caching, and error handling.

---

## Routing Overview

The app uses React Router v6 for navigation. Main routes include:

- `/` - Home/Landing
- `/products` - Product listing & filters
- `/products/:id` - Single product details
- `/cart` - Shopping cart view
- `/checkout` - Checkout form
- `/orders` - Order history (requires authentication)
- `/about` - About project
- `/login` - User login
- `/register` - User registration

Routes are nested inside a `HomeLayout` for shared UI (navbar, header, etc.) and error boundaries handle 404s and other route errors gracefully.

---

## Component Walkthrough

Key reusable components include:

- **Header & Navbar:** Responsive navigation, theme toggle, cart indicator.
- **NavLinks:** Dynamically renders navigation links.
- **Filters:** Filter products by category, price, etc.
- **CartItem, CartItemsList, CartTotals:** Cart management and summary.
- **CheckoutForm:** Handles order details and submission.
- **FormInput, FormCheckbox, FormRange, FormSelect:** Styled, reusable form components.
- **PaginationContainer, ComplexPaginationContainer:** Handle product pagination.
- **Loading, ErrorElement, SectionTitle:** Utility and UI helpers.

Each component is modular and leverages TailwindCSS/DaisyUI for design consistency.

---

## Step-by-Step Learning & Code Examples

This project was built as a learning resource, with each feature split into "challenges" and "solutions". Here are some highlights:

### 1. Project Initialization (Vite + TailwindCSS)
```bash
npm create vite@latest comfy-store -- --template react
cd comfy-store
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
_Tip: See tailwind.config.cjs and index.css for correct setup._

---

### 2. DaisyUI & Plugins Installation
```bash
npm i -D daisyui@latest @tailwindcss/typography
```
_Configure plugins in tailwind.config.cjs:_
```js
plugins: [require('@tailwindcss/typography'), require('daisyui')]
```

---

### 3. Install All Libraries
```bash
npm i axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3
```

---

### 4. Creating Pages & Components

Example: `pages/About.jsx`
```js
const About = () => <h1 className="text-4xl">About</h1>;
export default About;
```

Example: `components/FormInput.jsx`
```js
const FormInput = ({ label, name, type, defaultValue }) => (
  <div className="form-control ">
    <label className="label">
      <span className="label-text capitalize">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      className="input input-bordered "
    />
  </div>
);
export default FormInput;
```

---

### 5. Redux Toolkit Slices

Example: `features/cart/cartSlice.js`
```js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart(state, action) { /* ... */ },
    removeFromCart(state, action) { /* ... */ },
    // ...
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
```

---

### 6. API Usage with React Query

Example: Fetch products in `Products.jsx`
```js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
};

const { data, isLoading, error } = useQuery(['products'], fetchProducts);
```

---

### 7. Auth Flow (Login Example)

Example: `pages/Login.jsx`
```js
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => (
  <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4 className="text-center text-3xl font-bold">Login</h4>
      <FormInput type="email" label="email" name="identifier" defaultValue="test@test.com" />
      <FormInput type="password" label="password" name="password" defaultValue="secret" />
      <div className="mt-4">
        <SubmitBtn text="login" />
      </div>
    </Form>
  </section>
);
export default Login;
```

---

## Keywords

`react`, `vite`, `redux-toolkit`, `redux-thunk`, `react-query`, `tailwindcss`, `daisyui`, `ecommerce`, `shopping cart`, `pagination`, `product filtering`, `user authentication`, `netlify-deployment`, `dark-theme`, `react-router`

---

## Conclusion

eCommerce-Comfy demonstrates how to build a scalable, maintainable, and feature-rich eCommerce application with the latest React ecosystem tools. The structure, code samples, and learning challenges make it suitable for both learning and production-ready eCommerce solutions. Feel free to fork, contribute, or use as a reference for your own projects!

---

**Author:** [arnobt78](https://github.com/arnobt78)

---
