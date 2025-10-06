import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"; // opcional, para estilos del carrito

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={22} />
      <span className="cart-count">3</span>
    </div>
  );
}

export default CartWidget;
