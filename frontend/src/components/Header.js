import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="header">
      <Link to="/">Home</Link>

      {isAuthenticated ? (
        <>
          <Link to="/cart">Cart ({cart.length})</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
}
