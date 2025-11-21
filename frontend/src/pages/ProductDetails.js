import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    api.get(`/api/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(product._id);

      setSuccessMsg("✔ Added to Cart Successfully!");
      setTimeout(() => setSuccessMsg(""), 2500);
    } catch (err) {
      setSuccessMsg("❌ Login required to add to cart!");
      setTimeout(() => setSuccessMsg(""), 2500);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">

      {/* ✔ SUCCESS / ERROR POPUP */}
      {successMsg && <div className="success-popup">{successMsg}</div>}

      {/* LEFT SECTION */}
      <div className="left-section">
        <img src={product.image} alt={product.name} className="big-image" />

        <div className="button-group">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="buy-now-btn">⚡ Buy Now</button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <h2 className="product-title">{product.name}</h2>
        <p className="rating">⭐⭐⭐⭐☆ (456 ratings)</p>

        <h3 className="product-price">
          ₹{product.price}
          <span className="strike">₹{product.price + 500}</span>
          <span className="discount">20% off</span>
        </h3>

        <p className="description">{product.description}</p>

        <div className="delivery-box">🚚 Delivery in 3–5 days</div>
      </div>
    </div>
  );
}
