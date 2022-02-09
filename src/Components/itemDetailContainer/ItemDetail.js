import ItemsCount from "./itemsCount";
import "./ItemDetailContainer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { CartContext } from "../../Context/CartContext.js"


function ItemDetail({ product }) {
  const { agregaCarrito } = useContext(CartContext);


  const [inicial] = useState(0)
  const [conta, setConta] = useState(inicial);
  const [agregado, setAgregado] = useState(false);
  const onAdd = (cantidad) => {

    agregaCarrito(product, cantidad);
    setAgregado(true);


  };

  return (
    <div className="CardDetail">
      <div className="Card-BodyDetail">
        <img className="Card-imgDetail" src={product.img} alt={product.titulo}></img>
      </div>

      <div className="Card-BodyDetail">
        <p className="Card-TextDetail">Cod:{product.id}</p>
        <h3 className="Card-TituloDetail">{product.titulo}</h3>
        <h4 className="Card-TituloDetail">{product.detalle}</h4>
        <p className="Card-TextDetail">{product.descripcion}</p>
        <p className="Card-TextDetail">${product.precio}</p>
        <p className="Card-TextDetail">{product.stock}</p>

        <h5 className="Card-TituloDetail">Condiciones de Envio</h5>
        <p className="Card-TextDetail">- Envios a todo el pais</p>
        <p className="Card-TextDetail">- Costos: consultar segun tabla</p>
        <p className="Card-TextDetail">
          - Devolucion: dentro de las 48hs de llegada de la mercaderia
        </p>
        <div>
          <ItemsCount
            stock={product.stock}
            inicial={inicial}
            conta={conta}
            setConta={setConta}
          />
          <Button
            variant="secondary"
            disabled={conta === 0}
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
