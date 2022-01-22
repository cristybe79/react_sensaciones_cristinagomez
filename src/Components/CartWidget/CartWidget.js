import IconoCartWidget from "../../img/IconoCarrito.svg";
import "./CartWidget.css";

function CartWidget() {
    return (
    <>
        <div>
            <img src={IconoCartWidget} className="Icono-Cart" alt="IconoCart" />
        </div>
    </>
    );
}

export default CartWidget;
