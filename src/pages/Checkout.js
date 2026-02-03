import { useState } from "react";
import { useCart } from "../CartState";
import "./Checkout.css";

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart?.(); // optional: clear cart after order
  };

  // ✅ SUCCESS SCREEN
  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="order-success-card">
          <div className="success-icon">✅</div>
          <h2>Order Placed Successfully !!</h2>
          <h4>Thank you for shopping with PickBazar</h4>
        </div>
      </div>
    );
  }

  // 🛒 EMPTY CART SAFETY
  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      {/* LEFT */}
      <div className="checkout-left">
        <h3>Delivery Details</h3>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Mobile Number" />
        <textarea placeholder="Address" rows="3" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Pincode" />
      </div>

      {/* RIGHT */}
      <div className="checkout-right">
        <h3>Order Summary</h3>

        {cartItems.map((item) => (
          <div className="summary-row" key={item.id}>
            <span>{item.name} × {item.qty}</span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
