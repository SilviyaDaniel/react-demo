import { useCart } from "../CartState";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQty, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      {/* LEFT – ITEMS */}
      <div className="cart-left">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="item" className="cart-img" />

            <div className="cart-info">
              <p className="cart-name">{item.name}</p>
              <p className="cart-price">${item.price}</p>
            </div>

            <button
              className="qty-btn"
              onClick={() => updateQty(item.id, item.qty - 1)}
            >
              −
            </button>

            <span className="qty-value">{item.qty}</span>

            <button
              className="qty-btn"
              onClick={() => updateQty(item.id, item.qty + 1)}
            >
              +
            </button>

            <button
              className="delete-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT – SUMMARY */}
      <div className="cart-right">
        <div>
          <h3>Order Summary</h3>
          <hr />
          <p className="total-text">
            Total : <strong>${totalPrice.toFixed(2)}</strong>
          </p>
        </div>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
