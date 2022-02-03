import ItemsCount from "./itemsCount";
import "./ItemDetailContainer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemDetail({ product }) {



  const [agregado, setAgregado] = useState(false);

  const onAdd = () => {
    setAgregado(true);
  };
  const desAgregar = () => {
    setAgregado(false);

  }


  return (
    <div className="CardDetail">
      <div className="Card-BodyDetail">
        <img className="Card-imgDetail" src={product.img}></img>
      </div>

      <div className="Card-BodyDetail">
        <p className="Card-TextDetail">Cod:{product.id}</p>
        <h3 className="Card-TituloDetail">{product.titulo}</h3>
        <h4 className="Card-TituloDetail">{product.detalle}</h4>
        <p className="Card-TextDetail">{product.descripcion}</p>
        <p className="Card-TextDetail">${product.precio}</p>
        <p className="Card-TextDetail">{product.stock}</p>
        <Button variant="primary">Comprar</Button>

        <h5 className="Card-TituloDetail">Condiciones de Envio</h5>
        <p className="Card-TextDetail">- Envios a todo el pais</p>
        <p className="Card-TextDetail">- Costos: consultar segun tabla</p>
        <p className="Card-TextDetail">
          - Devolucion: dentro de las 48hs de llegada de la mercaderia
        </p>
        <div>
          {agregado ? (
            <Link to="/Carrito">
              <Button variant="secondary">Ver Carrito </Button>
            </Link>
          ) : (
            <ItemsCount stock={product.stock} inicial={1} onAdd={onAdd} />
          )}
        </div>
        <div className="seccion-btn">
          <Button onClick={desAgregar}>Vaciar</Button>
          <Link to="/catalogo">
            <Button variant="secondary"> Volver al Catalogo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
