import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeItem } = useCart();

  // SAFE total calculation
  const total = cart.reduce((sum, item) => {
    if (!item.product) return sum; // prevents crash
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? <p>No items in cart</p> : null}

      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          
          {/* HANDLE MISSING PRODUCT SAFELY */}
          {!item.product ? (
            <div className="missing-product">
              <p>⚠ Product no longer available</p>
              <button onClick={() => removeItem(item._id)}>Remove</button>
            </div>
          ) : (
            <>
              <h3>{item.product.name}</h3>
              <p>₹{item.product.price}</p>

              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  updateQuantity(item._id, Number(e.target.value))
                }
              />

              <button onClick={() => removeItem(item._id)}>Remove</button>
            </>
          )}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
