import { useContext } from "react";
import { Link } from "react-router-dom";
import IconoCartWidget from "../../img/IconoCarrito.svg";
import "./CartWidget.css";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
    const { contaItems } = useContext(CartContext);

    return (
      <>
        <div style={{ visibility: contaItems() < 0 ? "hidden" : "visible" }}>
          <div className="link-item">
            <Link to="/carrito">
              {contaItems()}
              <img
                src={IconoCartWidget}
                className="Icono-Cart"
                alt="IconoCart"
              />
            </Link>
          </div>
        </div>
      </>
    );
}

export default CartWidget;
