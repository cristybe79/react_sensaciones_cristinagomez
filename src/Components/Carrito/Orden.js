import { useEffect } from "react";
import { useState, useContext } from "react";
import { getFirestore } from "../../firebase/index";
import { Link, useParams } from "react-router-dom";
import { Card, Row,Col } from "react-bootstrap";
import './Carrito.css';


const GenerarOrden = () => {
    const { ordenId } = useParams();
    const [orden, setOrden] = useState({})
  

    useEffect(() => {
        const db = getFirestore();
        const ordenCollection = db.collection('ordenes')
        ordenCollection
            .doc(ordenId)
            .get()
          .then((res) => setOrden({
            id: res.id,
            ...res.data()
          }))

    }, [ordenId])
  
  if (!orden.id) {
    return <p>Cargando...</p>
  }
  
  return (
    <div className="maininicio">
      <Card className="ordenCompleta">
        <Row>
            <h3>Gracias por su compra</h3>
          <Col className="orden1">
            <h5>{orden.nombre}</h5>
            <h6>Orden Nro: {orden.id}</h6>
            <h5>Total de Compra ${orden.total}</h5>
            <h5>Detalle de Compra</h5>
            <div>
              {orden.items.map((el) => {
                return (
                  <p key={el.id}>
                    <ul>
                      <li>
                        {el.titulo}: {el.detalle} cant. {el.cantidad}
                      </li>
                    </ul>
                  </p>
                );
              })}
            </div>
          </Col>
            <Link to="/">
              <h4>Volver al Inicio</h4>
            </Link>

        </Row>
      </Card>
    </div>
  );
};

export default GenerarOrden;