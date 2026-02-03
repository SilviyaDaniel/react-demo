import { useCart } from "../CartState";
import "./ProductGrid.css";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

function ProductCard({ product }) {
  const { cartItems, addToCart, updateQty } = useCart();

  // find product qty from cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className="product-card">
      {product.discount && (
        <span className="discount-badge">{product.discount}%</span>
      )}

      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-body">
        <p className="product-name">{product.name}</p>
        <p className="product-unit">{product.unit}</p>

        <div className="card-footer">
          <span className="price">${product.price}</span>

          {qty === 0 ? (
            <button
              className="add-btn"
              onClick={() => addToCart(product)}
            >
                <div className="cart_btn"><ShoppingBasketRoundedIcon/>Cart</div>
            </button>
          ) : (
            <div className="qty-box">
              <button onClick={() => updateQty(product.id, qty - 1)}>
                -
              </button>
              <span>{qty}</span>
              <button onClick={() => updateQty(product.id, qty + 1)}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
