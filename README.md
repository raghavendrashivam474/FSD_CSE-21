# Full Stack Development — CSE 21 (FSD_CSE21)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.style=flat-square)](LICENSE)

A structured collection of laboratory experiments, hands-on assignments, and practical projects for the **Full Stack Development (CSE-21)** course. This repository tracks learning progress from core JavaScript and asynchronous programming to component-driven React applications and full-stack systems.

---

## 📑 Table of Contents

- [Repository Structure](#-repository-structure)
- [Module Summaries](#-module-summaries)
  - [1. JavaScript Fundamentals & Async JS](#1-javascript-fundamentals--async-js)
  - [2. React Component Architecture](#2-react-component-architecture)
  - [3. State Management (`useState`)](#3-state-management-usestate)
  - [4. Hooks Assignment — Image Resizer](#4-hooks-assignment--image-resizer)
  - [5. Client-Side Routing (`React Router`)](#5-client-side-routing-react-router)
  - [6. Side Effects & API Fetching (`useEffect`)](#6-side-effects--api-fetching-useeffect)
  - [7. Controlled Forms & State Sync (`useEffect`)](#7-controlled-forms--state-sync-useeffect)
  - [8. Capstone Project — Allocra](#8-capstone-project--allocra)
- [Getting Started](#-getting-started)
- [Tech Stack Overview](#-tech-stack-overview)

---

## 📁 Repository Structure

```text
FSD_CSE21/
├── Javascript/                 # Core JS fundamentals, array methods, async programming & API integration
├── React/                      # Introduction to React: reusable components, props, and styling (Book Card)
├── React_usestate/             # State management basics with useState (Interactive Counter)
├── React_hooks_assignment/     # Assignment: Dynamic image resizer with bounded row/column state
├── React_route/                # Multi-page client-side routing with React Router DOM
├── React_useeffect/            # Data fetching using Axios, AbortController cancellation & dynamic User Profile
├── React_useffect_1/           # Controlled forms, state updates, submission handling & effect logging
└── allocra/                    # Full-Stack Capstone: Academic scheduling & resource allocation engine
```

---

## 🔍 Module Summaries

### 1. JavaScript Fundamentals & Async JS
📁 [`Javascript/`](./Javascript)

Comprehensive exercises covering modern JavaScript (ES6+) basics, functional array transformations, and asynchronous paradigms:
- **Language Basics:** Datatypes (`datatype.html`), functions (`function.html`), loops (`loop.html`), and arrays (`array.html`).
- **Higher-Order Array Methods:** Functional programming with `map()` (`map.html`), `filter()` (`filter.html`), and `reduce()` (`reduce.html`).
- **Asynchronous Evolution:**
  - `callback.js` — Understanding asynchronous execution via callbacks.
  - `callbackhell.js` — Demonstrating the pyramid of doom and nested control flows.
  - `promises.js` — Resolving and rejecting Promises to escape callback hell.
  - `sync_await.js` — Writing clean, synchronous-looking asynchronous flows with `async/await`.
- **Mini-Project (`My_Shop.html`):** An asynchronous product catalog that fetches live products from the [DummyJSON API](https://dummyjson.com/products) and renders them dynamically into a styled table.

---

### 2. React Component Architecture
📁 [`React/`](./React)

- Introduction to Vite + React 18 project structure.
- Implementation of a reusable **Book Card Component** (`book.jsx` & `book.css`).
- Explores props destructuring, default fallback values, conditional badge rendering (in-stock vs. out-of-stock), and component-scoped CSS styling.

---

### 3. State Management (`useState`)
📁 [`React_usestate/`](./React_usestate)

- Core concepts of React reactive state.
- **Counter App (`counterapp.jsx`):** Demonstrates increment (`+`), decrement (`-`), and reset functionalities updating the DOM via component re-renders.

---

### 4. Hooks Assignment — Image Resizer
📁 [`React_hooks_assignment/my-react-app`](./React_hooks_assignment/my-react-app)

- Practical assignment on state-driven UI transformations.
- **Image Row & Column Resizer (`image_row_col.jsx`):**
  - Manages dynamic height and width states via step increments/decrements.
  - Implements bounded constraints (`Math.max(MIN_SIZE, ...)`) to prevent collapsing.
  - Reset control to restore original dimensions.

---

### 5. Client-Side Routing (`React Router`)
📁 [`React_route/`](./React_route)

- Declarative single-page navigation using `react-router-dom`.
- Demonstrates `<BrowserRouter>`, `<Routes>`, `<Route>`, and navigation links (`<Link>`).
- Implements navigation between **Home**, **About**, and **Contact** views without full-page browser refreshes.

---

### 6. Side Effects & API Fetching (`useEffect`)
📁 [`React_useeffect/`](./React_useeffect)

- Advanced lifecycle management and side effects with `useEffect`.
- **User Profile Component (`UserProfile.jsx`):**
  - Asynchronous data fetching from JSONPlaceholder API using `axios`.
  - Proper memory cleanup and request cancellation using `AbortController` signal to prevent race conditions.
  - Graceful handling of loading states, error states, and dynamic prop changes based on user selection buttons.

---

### 7. Controlled Forms & State Sync (`useEffect`)
📁 [`React_useffect_1/`](./React_useffect_1)

- Form state management in React.
- Controlled inputs with unified object state (`name`, `email`, `pass`).
- Form submission handling with `e.preventDefault()`.
- Effect listener observing form updates in the background.

---

### 8. Capstone Project — Allocra
📁 [`allocra/`](./allocra)

- **Academic Timetable & Resource Allocation Engine**
- A full-stack MERN application designed to automate and optimize course scheduling, room assignments, faculty allocations, and timetable constraints.
- **Stack:** Node.js (ESM), Express, MongoDB/Mongoose, React 18, Vite, Vitest regression testing suite.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/raghavendrashivam474/FSD_CSE-21.git
cd FSD_CSE21
```

### 2. Running JavaScript Examples
Open any file from the `Javascript/` directory directly in your browser, or serve it using the VS Code **Live Server** extension:
```bash
# Example: Open My_Shop.html
start Javascript/My_Shop.html    # Windows
# or open with Live Server in VS Code
```

### 3. Running Any React Application
Navigate into any React project directory, install dependencies, and start the local development server:

```bash
# Example for React_useeffect:
cd React_useeffect
npm install
npm run dev

# Example for React_route:
cd ../React_route
npm install
npm run dev
```

The Vite dev server will typically launch at `http://localhost:5173/`.

---

## 🛠️ Tech Stack Overview

| Category | Technologies / Tools |
| :--- | :--- |
| **Core Web** | HTML5, CSS3, Modern JavaScript (ES6+) |
| **Frontend Library** | React 18, JSX |
| **Build Tool & Bundler** | Vite |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios, Fetch API |
| **Backend & Database** | Node.js, Express.js, MongoDB, Mongoose *(Allocra)* |
| **Testing** | Vitest, Supertest, React Testing Library *(Allocra)* |

---

## 👤 Author

- **GitHub:** [@raghavendrashivam474](https://github.com/raghavendrashivam474)

---