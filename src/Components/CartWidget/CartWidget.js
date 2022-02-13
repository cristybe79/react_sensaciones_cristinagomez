import { useContext } from "react";
import { Link } from "react-router-dom";
import IconoCartWidget from "../../img/IconoCarrito.svg";
import "./CartWidget.css";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
    const { contaItems } = useContext(CartContext);

    return (
      <>
        <div>
          <Link
            to="/Carrito"
            style={{ visibility: contaItems() === 0 ? "hidden" : "visible" }}
          >
            {contaItems()}
            <img src={IconoCartWidget} className="Icono-Cart" alt="IconoCart" />
          </Link>
        </div>
      </>
    );
}

export default CartWidget;
