import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
import "./NavBar.css"

function CartWidget() {
  const { contaItems } = useContext(CartContext);

  return (
    <>
      <Link
        to="/Carrito"
        style={{ visibility: contaItems() === 0 ? "hidden" : "visible" }}
        className="link-item"
      >

          {contaItems()}
          <FontAwesomeIcon icon={faShoppingCart} />

      </Link>
    </>
  );
}

export default CartWidget;
