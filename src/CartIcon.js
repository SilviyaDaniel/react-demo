import { useNavigate } from "react-router-dom";
import { useCart } from "./CartState";
import "./CartIcon.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function CartIcon() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <button className="cart-fab" onClick={() => navigate("/cart")}>
      <span className="cart-badge">{totalQty}</span>
      <ShoppingBagIcon/>
    </button>
  );
}
