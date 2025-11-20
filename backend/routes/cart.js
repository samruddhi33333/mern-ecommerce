const express = require("express");
const CartItem = require("../models/CartItem");
const auth = require("../middleware/auth");

const router = express.Router();

// GET CART ITEMS -------------------------------------------
router.get("/", auth, async (req, res) => {
  try {
    const items = await CartItem.find({ user: req.user.id }).populate("product");
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD TO CART -----------------------------------------------
router.post("/", auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let item = await CartItem.findOne({
      user: req.user.id,
      product: productId,
    });

    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = await CartItem.create({
        user: req.user.id,
        product: productId,
        quantity,
      });
    }

    res.json({ msg: "Added to cart" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE QUANTITY -------------------------------------------
router.put("/:id", auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    await CartItem.findByIdAndUpdate(req.params.id, { quantity });
    res.json({ msg: "Updated quantity" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE CART ITEM ------------------------------------------
router.delete("/:id", auth, async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ msg: "Item removed" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
