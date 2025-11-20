const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET ALL PRODUCTS -------------------------------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT BY ID -------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
