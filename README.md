# Comfy Store | E-Commerce Platform 4 - React, Vite, Redux Toolkit, Express.js FullStack Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9-764ABC)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-3.5-5A0EF8)](https://daisyui.com/)
[![Axios](https://img.shields.io/badge/Axios-1.4-5A29E4)](https://axios-http.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-4.32-FF4154)](https://tanstack.com/query/latest)

An advanced, modern e-commerce web application built with **React**, **Vite**, **Redux Toolkit**, **TailwindCSS**, **DaisyUI**, and **TanStack Query**. This project demonstrates a real-world online shop with a rich set of features, clean project structure, and best practices for state management, UI, and API integration. Ideal for learning full-stack front-end development and reusable component patterns.

- **Live Demo:** [https://ecommerce-comfy-arnob.netlify.app/](https://ecommerce-comfy-arnob.netlify.app/)

![Screenshot 2025-02-25 at 16 26 43](https://github.com/user-attachments/assets/9cecb6cc-6dd5-4944-ae68-d7b1ec53d67a)
![Screenshot 2025-02-25 at 16 26 56](https://github.com/user-attachments/assets/c7ed2baa-9b44-445e-b5d0-a574b5adf7d1)
![Screenshot 2025-02-25 at 16 28 17](https://github.com/user-attachments/assets/78dc6803-3afa-46d4-9602-80d3d4f4430d)
![Screenshot 2025-02-25 at 16 28 37](https://github.com/user-attachments/assets/0414051f-2d85-4c38-97be-1b6ba231a04d)
![Screenshot 2025-02-25 at 16 29 21](https://github.com/user-attachments/assets/96f92595-a8aa-4b53-83ad-26f535bc7fd1)
![Screenshot 2025-02-25 at 16 29 54](https://github.com/user-attachments/assets/1cca2809-225f-4226-8ce2-df1d2f20ece7)
![Screenshot 2025-02-25 at 16 30 23](https://github.com/user-attachments/assets/ca100a98-b9a0-4b30-b4b2-45ed8eadaec7)

---

## Table of Contents

- [Project Summary](#project-summary)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables (.env)](#environment-variables-env)
- [How to Run the Project](#how-to-run-the-project)
- [Routing Overview](#routing-overview)
- [API Reference](#api-reference)
- [State Management (Redux)](#state-management-redux)
- [Component Walkthrough](#component-walkthrough)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Features & Functionalities](#features--functionalities)
- [Step-by-Step Learning & Code Examples](#step-by-step-learning--code-examples)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Summary

**Comfy Store (e-Comfy)** is a front-end eCommerce application that connects to a **Strapi** headless CMS API. It showcases:

- **Server state** with TanStack Query (loaders, caching, refetching).
- **Client state** with Redux Toolkit (cart, user, theme).
- **React Router v6** with loaders, actions, and nested layouts.
- **Responsive UI** with TailwindCSS and DaisyUI (themes: winter, dracula).

The app does **not** include a custom backend in this repository; it uses the public Strapi demo API. You can run it as-is or point it to your own Strapi instance via environment variables.

---

## Technologies Used

| Category       | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | React 18                                      |
| Build Tool     | Vite 4                                        |
| State (client) | Redux Toolkit, React-Redux                    |
| Server state   | TanStack Query (React Query) v4               |
| Routing        | React Router DOM v6                           |
| HTTP client    | Axios                                         |
| Styling        | TailwindCSS, DaisyUI, @tailwindcss/typography |
| UI feedback    | React Toastify                                |
| Utilities      | dayjs (dates), react-icons                    |

---

## Project Structure

```bash
12-comfy-store/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.js
├── src/
│   ├── main.jsx              # App entry, Redux Provider, ToastContainer
│   ├── App.jsx               # Router + QueryClient, route definitions, loaders/actions
│   ├── store.js              # Redux store (cart + user slices)
│   ├── index.css             # Tailwind + custom .align-element
│   ├── utils/
│   │   └── index.jsx         # customFetch (Axios), formatPrice, generateAmountOptions
│   ├── features/
│   │   ├── cart/
│   │   │   └── cartSlice.js  # cart state, localStorage sync
│   │   └── user/
│   │       └── userSlice.js  # user + theme, localStorage
│   ├── components/
│   │   ├── index.js          # Barrel exports
│   │   ├── Header.jsx         # User greeting, login/logout, links
│   │   ├── Navbar.jsx         # Logo, NavLinks, theme toggle, cart icon
│   │   ├── NavLinks.jsx       # Nav links (home, about, products, cart, checkout, orders)
│   │   ├── Hero.jsx           # Landing hero + carousel
│   │   ├── FeaturedProducts.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ProductsContainer.jsx # Grid/List toggle + product count
│   │   ├── ProductsGrid.jsx
│   │   ├── ProductsList.jsx
│   │   ├── Filters.jsx        # Search, category, company, sort, price, shipping
│   │   ├── PaginationContainer.jsx
│   │   ├── ComplexPaginationContainer.jsx
│   │   ├── CartItemsList.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartTotals.jsx
│   │   ├── CheckoutForm.jsx   # Shipping form + order submission
│   │   ├── OrdersList.jsx
│   │   ├── FormInput.jsx
│   │   ├── FormSelect.jsx
│   │   ├── FormRange.jsx
│   │   ├── FormCheckbox.jsx
│   │   ├── SubmitBtn.jsx
│   │   ├── Loading.jsx
│   │   └── ErrorElement.jsx
│   ├── pages/
│   │   ├── index.js           # Barrel exports
│   │   ├── HomeLayout.jsx     # Header, Navbar, Outlet, loading state
│   │   ├── Landing.jsx        # Hero + FeaturedProducts
│   │   ├── Products.jsx       # Filters, ProductsContainer, Pagination
│   │   ├── SingleProduct.jsx # Product detail, add to cart
│   │   ├── Cart.jsx           # Cart items + totals + checkout link
│   │   ├── Checkout.jsx       # CheckoutForm + CartTotals (auth required)
│   │   ├── Orders.jsx         # Orders list + pagination (auth required)
│   │   ├── About.jsx
│   │   ├── Login.jsx          # Login form + guest user
│   │   ├── Register.jsx       # Registration form
│   │   └── Error.jsx          # Route error (e.g. 404)
│   └── assets/                # Hero carousel images (hero1–4.webp)
├── README.md
└── LICENSE
```

---

## Installation & Setup

1. **Clone the repository** (or download the project).
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Optional:** Create a `.env` file in the project root if you want to override the API base URL (see [Environment Variables](#environment-variables-env)).
4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal (e.g. `http://localhost:5173`).

**Other scripts:**

- `npm run build` – Production build (output in `dist/`).
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint.

---

## Environment Variables (.env)

The app uses a **hardcoded API base URL** in `src/utils/index.jsx` by default:

```js
const productionUrl = "https://strapi-store-server.onrender.com/api";
```

To make the API URL configurable (e.g. for your own Strapi backend):

1. **Create a `.env` file** in the project root:

   ```env
   VITE_API_URL=https://strapi-store-server.onrender.com/api
   ```

   For local Strapi:

   ```env
   VITE_API_URL=http://localhost:1337/api
   ```

2. **Use the variable in code.** In `src/utils/index.jsx`, replace the base URL:

   ```js
   const productionUrl =
     import.meta.env.VITE_API_URL ||
     "https://strapi-store-server.onrender.com/api";

   export const customFetch = axios.create({
     baseURL: productionUrl,
   });
   ```

3. **Restart the dev server** after changing `.env`. Vite only exposes variables prefixed with `VITE_`.

**Required for this project:** None. The app works without a `.env` file. Optional: `VITE_API_URL` for a custom API.

---

## How to Run the Project

| Goal             | Command / Step                                         |
| ---------------- | ------------------------------------------------------ |
| Development      | `npm run dev` → open browser at shown URL              |
| Production build | `npm run build` → serve `dist/` (e.g. Netlify, Vercel) |
| Preview build    | `npm run preview` after `npm run build`                |

**Learning flow:**

1. Run `npm run dev` and open the app.
2. Use **Guest user** on Login to avoid creating an account (if the demo API supports it).
3. Browse products, filters, cart, checkout, and orders to see how loaders, actions, and Redux interact.

---

## Routing Overview

Routes are defined in `src/App.jsx` using `createBrowserRouter`.

| Path            | Layout     | Description                          |
| --------------- | ---------- | ------------------------------------ |
| `/`             | HomeLayout | Landing (Hero + Featured Products)   |
| `/products`     | HomeLayout | All products, filters, pagination    |
| `/products/:id` | HomeLayout | Single product detail, add to cart   |
| `/cart`         | HomeLayout | Cart items, totals, link to checkout |
| `/about`        | HomeLayout | About page                           |
| `/checkout`     | HomeLayout | Checkout form (auth required)        |
| `/orders`       | HomeLayout | User orders (auth required)          |
| `/login`        | —          | Login (and guest user)               |
| `/register`     | —          | Register                             |

- **HomeLayout** wraps all main pages with `Header`, `Navbar`, and an `Outlet`. It shows a loading UI when navigation state is `loading`.
- **Loaders** prefetch data with TanStack Query (`queryClient.ensureQueryData`) and pass it to the page.
- **Actions** handle form submissions (login, register, checkout). Checkout and Orders loaders redirect to `/login` if the user is not authenticated.

---

## API Reference

The app talks to a **Strapi** backend. Base URL: `https://strapi-store-server.onrender.com/api` (or `VITE_API_URL`).

| Method | Endpoint               | Auth | Description                                                                                                                                   |
| ------ | ---------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/products`            | No   | List products. Query params: `featured`, `search`, `category`, `company`, `sort`, `price`, `shipping`, `pagination[page]`, etc.               |
| GET    | `/products/:id`        | No   | Single product by ID.                                                                                                                         |
| POST   | `/auth/local`          | No   | Login. Body: `identifier`, `password`.                                                                                                        |
| POST   | `/auth/local/register` | No   | Register. Body: `username`, `email`, `password`.                                                                                              |
| GET    | `/orders`              | Yes  | List current user's orders. Header: `Authorization: Bearer <jwt>`. Query: `pagination[page]`.                                                 |
| POST   | `/orders`              | Yes  | Create order. Header: `Authorization: Bearer <jwt>`. Body: `{ data: { name, address, chargeTotal, orderTotal, cartItems, numItemsInCart } }`. |

Responses follow Strapi’s format (e.g. `data`, `meta` for pagination). The `customFetch` Axios instance in `src/utils/index.jsx` sets `baseURL`; all endpoints are relative to that.

---

## State Management (Redux)

**Store** (`src/store.js`):

- `cartState` – cart items, totals, persisted in `localStorage` key `cart`.
- `userState` – `user` (from login/register) and `theme` (winter/dracula), persisted in `localStorage` keys `user` and `theme`.

**Cart slice** (`src/features/cart/cartSlice.js`):

- `addItem`, `removeItem`, `editItem` (quantity), `clearCart`, `calculateTotals`.
- Cart is rehydrated from `localStorage` on load.

**User slice** (`src/features/user/userSlice.js`):

- `loginUser`, `logoutUser`, `toggleTheme`.
- Theme is applied to `document.documentElement` via `data-theme`.

---

## Component Walkthrough

- **Header** – Shows “Hello, username” and Logout when logged in; otherwise Sign in / Create Account links.
- **Navbar** – Logo (e-Comfy), NavLinks (desktop + mobile dropdown), theme toggle, cart icon with badge count.
- **NavLinks** – Renders links; hides Checkout and Orders when not logged in.
- **Hero** – Heading, CTA, and image carousel (uses `src/assets`).
- **FeaturedProducts** – Uses landing loader data; renders `ProductsGrid` with featured products.
- **SectionTitle** – Reusable section heading.
- **Filters** – Form with search, category, company, sort, price range, free-shipping checkbox; submits as GET query params to `/products`.
- **ProductsContainer** – Grid/List toggle; renders `ProductsGrid` or `ProductsList` from loader data.
- **PaginationContainer** / **ComplexPaginationContainer** – Page navigation for products and orders.
- **CartItemsList** / **CartItem** – List of cart items with quantity select and remove.
- **CartTotals** – Subtotal, shipping, tax, order total (from Redux cart state).
- **CheckoutForm** – Name and address; submit triggers checkout action (POST `/orders`).
- **OrdersList** – Table of orders (name, address, products count, cost, date).
- **FormInput, FormSelect, FormRange, FormCheckbox, SubmitBtn** – Reusable form controls used in Login, Register, Filters, and Checkout.

---

## Reusing Components in Other Projects

1. **Copy the component file** (and any it depends on, e.g. `utils/formatPrice`).
2. **Satisfy dependencies:** Redux (and slices), React Router, Tailwind/DaisyUI classes, icons.
3. **Form components** are generic: pass `label`, `name`, `type`, `defaultValue`, `size`, etc. Example:

   ```jsx
   import FormInput from "./FormInput";
   <FormInput type="email" label="Email" name="email" />;
   ```

4. **Cart/checkout logic** is in Redux; reuse `cartSlice` and `CartTotals`/`CartItem` if you keep the same state shape, or adapt the slice and components to your data model.

---

## Features & Functionalities

- **Landing page** – Hero and featured products (loader + TanStack Query).
- **Product listing** – Filters (search, category, company, sort, price, shipping), grid/list view, pagination.
- **Product detail** – Image, title, price, description, color picker, quantity, Add to bag (Redux cart).
- **Cart** – Persisted in localStorage; update quantity, remove item; subtotal, shipping, tax, total; link to checkout or login.
- **Checkout** – Protected route; form submits order to API; clears cart and redirects to Orders.
- **Orders** – Protected route; list and pagination of user orders.
- **Auth** – Login, Register, Guest user; JWT stored in Redux and localStorage; logout clears cart and query cache.
- **Theme** – Winter/Dracula toggle (DaisyUI); persisted in localStorage.
- **Errors** – Route-level error element and 404 page.

---

## Step-by-Step Learning & Code Examples

### 1. Loader with TanStack Query (Landing)

```jsx
// src/pages/Landing.jsx
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  return { products: response.data.data };
};
```

The route loader runs before the page renders and prefetches data; the same query key is used so FeaturedProducts can read from cache.

---

### 2. Redux cart: add item

```jsx
// In SingleProduct or any product card
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const cartProduct = {
  cartID,
  productID,
  image,
  title,
  price,
  company,
  productColor,
  amount,
};
dispatch(addItem({ product: cartProduct }));
```

`cartSlice` updates state and persists to `localStorage`; toast is shown from the slice.

---

### 3. Form action (Login)

```jsx
// src/pages/Login.jsx
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await customFetch.post("/auth/local", data);
    store.dispatch(loginUser(response.data));
    return redirect("/");
  };
```

React Router passes the store into the action; the action submits the form, gets JWT, dispatches `loginUser`, and redirects.

---

### 4. Protected route (Checkout loader)

```jsx
// src/pages/Checkout.jsx
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};
```

If there is no user, the loader redirects to login and shows a toast.

---

## Keywords

React, Vite, Redux Toolkit, TanStack Query, React Router v6, loaders, actions, Axios, Strapi, headless CMS, TailwindCSS, DaisyUI, eCommerce, cart, checkout, JWT, localStorage, theme toggle, pagination, filters, form components, reusable components, state management, server state, client state.

---

## Conclusion

Comfy Store is a full-featured front-end eCommerce demo that combines React Router v6 (loaders/actions), TanStack Query (server state), and Redux Toolkit (cart and user). You can use it as a template for similar apps, swap the Strapi URL via `.env`, and reuse form and layout components in other projects. The structure and patterns are suitable for teaching and extending.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
