MERN E-Commerce Website

A simple full-stack E-commerce platform built using MongoDB, Express.js, React.js, Node.js.

This project includes:
✔ User Authentication (Register/Login)
✔ Product Listing
✔ Product Details Page
✔ Add to Cart / Update / Remove
✔ Protected Routes using JWT
✔ Fully functional MERN stack application

🚀 Tech Stack

Frontend: React.js, Axios

Backend: Node.js, Express.js, Mongoose

Database: MongoDB Atlas

Authentication: JWT

📦 Features

User registration & login

JWT-based authentication

View all products

View product details

Add to cart

Update cart quantity

Remove cart item

Fully responsive UI

🛠️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone <your-repo-link>
cd mern-ecommerce

⚙️ Backend Setup

Go into the backend folder:

cd backend

Install dependencies:
npm install

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

Seed Products (optional but recommended):
node seed/seedProduct.js

Start backend server:
npm start


Backend runs at:

http://localhost:5000

💻 Frontend Setup

Go to frontend folder:

cd ../frontend

Install dependencies:
npm install

Create .env file:
REACT_APP_API_URL=http://localhost:5000/api

Start frontend:
npm start


Frontend runs at:

http://localhost:3000