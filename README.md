# Umbrella E-commerce Platform

Welcome to the **Umbrella** project! This repository contains the source code for the Umbrella e-commerce platform, split into three main parts:

## 📂 Project Structure

-   **`umbrella/`**: **Storefront** (Next.js 16)
    -   The public-facing website where customers can browse and shop.
    -   Includes the Landing Page and future Shop features.
    
-   **`client/`**: **Admin Dashboard** (React + Vite)
    -   The internal dashboard for managing users, orders, and settings.
    -   Includes Login, Register, and User Management.

-   **`server/`**: **Backend API** (Node.js + Express)
    -   The central API server handling data, authentication, and business logic.
    -   Connects to the database (SQLite/PostgreSQL).

## 🚀 Getting Started

To run the full application, you will need to start each service independently.

### 1. Backend Server
```bash
cd server
npm install
npm run dev
```

### 2. Admin Dashboard
```bash
cd client
npm install
npm run dev
```

### 3. Storefront
```bash
cd umbrella
npm install
npm run dev
```

## 🛠️ Technologies

-   **Frontend**: Next.js, React, Tailwind CSS, Vite
-   **Backend**: Node.js, Express, TypeScript
-   **Database**: SQLite / PostgreSQL
-   **Icons**: Lucide React

## 📝 Status

-   **Landing Page**: ✅ Completed
-   **Authentication**: ✅ Implemented (Backend + Admin Client)
-   **User Management**: ✅ Implemented (Basic)
-   **Shop/Cart**: 🚧 In Progress

For more details, please refer to the documentation in each directory.
