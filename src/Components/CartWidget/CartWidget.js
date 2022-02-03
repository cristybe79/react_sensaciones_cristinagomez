import { Link } from "react-router-dom";
import IconoCartWidget from "../../img/IconoCarrito.svg";
import "./CartWidget.css";

function CartWidget() {
    return (
    <>
            <div><Link to="/carrito">
            <img src={IconoCartWidget} className="Icono-Cart" alt="IconoCart" />
            </Link>
        </div>
    </>
    );
}

export default CartWidget;
