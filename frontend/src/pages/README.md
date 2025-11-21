📦 MERN Ecommerce Assignment

A simple Ecommerce application built using the MERN Stack (MongoDB, Express, React, Node.js) with user authentication, product listing, product details, and cart functionality.

🚀 Features
🔐 Authentication

User Registration

User Login

JWT-based authentication

Protected routes (Cart only accessible after login)

🛍 Product Module

View all products

View single product details

Products seeded in MongoDB

Real product names + working images

🛒 Cart Module

Add to cart (only after login)

Update cart quantity

Remove items

Cart persists using MongoDB

⚛ Frontend (React)

React Router

Context API (Auth + Cart)

Axios API calls

UI inspired by Flipkart

🖥 Backend (Node + Express)

REST API for auth, products, cart

JWT middleware for protected routes

MongoDB Atlas connection

📁 Project Structure
mern-ecommerce/
│
├── backend/
│   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── models/
│   │    ├── User.js
│   │    ├── Product.js
│   │    └── CartItem.js
│   ├── routes/
│   │    ├── auth.js
│   │    ├── products.js
│   │    └── cart.js
│   ├── middleware/
│   │    └── auth.js
│   └── seed/
│        └── seedProducts.js
│
└── frontend/
    ├── src/
    │    ├── api/axios.js
    │    ├── contexts/
    │    │      ├── AuthContext.js
    │    │      └── CartContext.js
    │    ├── components/
    │    │      ├── Header.js
    │    │      ├── ProductCard.js
    │    │      └── ProtectedRoute.js
    │    ├── pages/
    │    │      ├── Home.js
    │    │      ├── Login.js
    │    │      ├── Register.js
    │    │      ├── ProductDetails.js
    │    │      └── Cart.js
    │    ├── App.js
    │    └── index.js
    ├── package.json
    └── README.md

⚙️ Installation & Setup
1️⃣ Clone the project
git clone your-repo-url
cd mern-ecommerce

🟦 Backend Setup
cd backend
npm install

Create .env file
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key

Seed Products
node seed/seedProducts.js

Start Backend
npm run dev

🟩 Frontend Setup
cd frontend
npm install
npm start