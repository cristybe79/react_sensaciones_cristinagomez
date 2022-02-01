import ItemsCount from "./itemsCount";
import "./ItemDetailContainer.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardDetail({ id, titulo, detalle, precio, img, stock, descripcion,onAdd }) {
  const [conta, setConta] = useState(0)
  const [stockRes, setStockRes] = useState(stock)


  const agregarItem = () => {
    const nuevoItem = {
    id,titulo, precio

    }

  }



  return (
    <div className="CardDetail">
      <div className="Card-BodyDetail">
        <img className="Card-imgDetail" src={img}></img>
      </div>

      <div className="Card-BodyDetail">
        <p className="Card-TextDetail">Cod:{id}</p>
        <h3 className="Card-TituloDetail">{titulo}</h3>
        <h4 className="Card-TituloDetail">{detalle}</h4>
        <p className="Card-TextDetail">{descripcion}</p>
        <p className="Card-TextDetail">${precio}</p>
        <p className="Card-TextDetail">Stock: {stockRes - conta} </p>
        <Button variant="primary">Comprar</Button>
        <h5 className="Card-TituloDetail">Condiciones de Envio</h5>
        <p className="Card-TextDetail">- Envios a todo el pais</p>
        <p className="Card-TextDetail">- Costos: consultar segun tabla</p>
        <p className="Card-TextDetail">
          - Devolucion: dentro de las 48hs de llegada de la mercaderia
        </p>
        <ItemsCount
          conta={conta}
          stockRes={stockRes}
          setStockRest={setStockRes}
          setConta={setConta}
          onAdd={onAdd}
        />
        <div className="seccion-btn">
          <Link to="/Carrito">
            <Button variant="secondary">Ver Carrito</Button>
          </Link>
        <Link to="/catalogo">
          <Button variant="secondary"> Volver al Catalogo</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
