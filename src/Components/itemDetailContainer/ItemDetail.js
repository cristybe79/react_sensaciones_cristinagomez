import ItemsCount from "./itemsCount";
import "./ItemDetailContainer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { CartContext } from "../../Context/CartContext.js"


function ItemDetail({ id, titulo, precio, detalle, descripcion, stock, img }) {
  const { addCarrito, agregaCarrito, estaEnCarrito, removeCarrito } = useContext(CartContext);


  const [inicial] = useState(0)
  const [conta, setConta] = useState(inicial);
  const [agregado, setAgregado] = useState(false);
  const onAdd = () => {

    const nuevoItem = {
      id, titulo, detalle, precio, conta, img

    }
    if (conta > 0) {

      agregaCarrito(nuevoItem);
      setAgregado(true);
    }
  };
  const desAgregar = () => {
    setAgregado(false);

  }
  // const styles = {
  //   btnAgregar: estaEnCarrito(id) ? "btn btn-danger m-2" : "btn btn-success m-2",
  //   btnTerminar: `btn btn-success ${!estaEnCarrito(id) && "desactivado"}`,
  // };

  return (
    <div className="CardDetail">
      <div className="Card-BodyDetail">
        <img className="Card-imgDetail" src={img} alt={titulo}></img>
      </div>

      <div className="Card-BodyDetail">
        <p className="Card-TextDetail">Cod:{id}</p>
        <h3 className="Card-TituloDetail">{titulo}</h3>
        <h4 className="Card-TituloDetail">{detalle}</h4>
        <p className="Card-TextDetail">{descripcion}</p>
        <p className="Card-TextDetail">${precio}</p>
        <p className="Card-TextDetail">{stock}</p>

        <h5 className="Card-TituloDetail">Condiciones de Envio</h5>
        <p className="Card-TextDetail">- Envios a todo el pais</p>
        <p className="Card-TextDetail">- Costos: consultar segun tabla</p>
        <p className="Card-TextDetail">
          - Devolucion: dentro de las 48hs de llegada de la mercaderia
        </p>
        <div>
          <ItemsCount
            stock={stock}
            inicial={inicial}
            conta={conta}
            setConta={setConta}
          />
          <Button
            variant="secondary"
            disabled={conta === 0}
            // className={styles.btnAgregar}
            onClick={onAdd}
          >
            Agregar
          </Button>
        </div>

        <div>
          <Link to="/Carrito">
            <Button >Comprar</Button>
          </Link>
          <Link to="/catalogo">
            <Button variant="secondary"> Volver al Catalogo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
