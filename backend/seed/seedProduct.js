require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

const products = [
  {
    name: "Samsung Galaxy S23 Ultra",
    description: "The ultimate Android smartphone with Snapdragon 8 Gen 2.",
    price: 124999,
    image: "https://images.unsplash.com/photo-1675271409334-79fba399a097?auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    stock: 20,
  },
  {
    name: "JBL Wireless Headphones",
    description: "Noise-cancelling wireless headphones with deep bass.",
    price: 11999,
    image: "https://images.unsplash.com/photo-1580894908361-967195033c66?auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    stock: 25,
  },
  {
    name: "Adidas Ultraboost Running Shoes",
    description: "Premium cushioned running shoes for comfort & speed.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1600185365929-3a2ce3a3c91c?auto=format&fit=crop&w=1000&q=80",
    category: "fashion",
    stock: 40,
  },
  {
    name: "MacBook Pro 16-inch",
    description: "Powerful laptop for creators, developers, and professionals.",
    price: 189999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    stock: 15,
  },
  {
    name: "Modern Wooden Chair",
    description: "Ergonomic wooden chair with soft cushioning.",
    price: 3999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    category: "furniture",
    stock: 18,
  },
  {
    name: "Classic Leather Watch",
    description: "Elegant wristwatch with premium leather strap.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    category: "fashion",
    stock: 50,
  },
  {
    name: "Travel Duffel Bag",
    description: "Durable duffel bag perfect for travel & gym.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=1000&q=80",
    category: "fashion",
    stock: 30,
  },
  {
    name: "Samsung 4K Ultra HD TV",
    description: "43-inch Ultra HD Smart TV with HDR.",
    price: 34999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b4?auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    stock: 10,
  },
  {
    name: "Boat Bluetooth Speaker",
    description: "Portable speaker with punchy bass.",
    price: 3299,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1000&q=80",
    category: "electronics",
    stock: 40,
  },
  {
    name: "Minimal LED Desk Lamp",
    description: "Energy-efficient LED desk lamp for study or work.",
    price: 999,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    category: "furniture",
    stock: 35,
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("10 Products seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
