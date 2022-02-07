import * as React from "react";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { Button,Card ,Container,Row,Col} from 'react-bootstrap';
import { CartContext } from "../Context/CartContext"



const Carrito = () => {
    const { addCarrito, removeCarrito, totalCarrito } = useContext(CartContext)
    

    return (
        <div>
            <h2>Resumen de Compra</h2>
            {addCarrito.map((comprado) =>
            (
                <Card className="resumen-detail" key={comprado.id}>
                    <Container>
                    <Row>
                    <Col>{comprado.titulo}</Col>
                    <Col>{comprado.detalle}</Col>
                    <Col>{comprado.conta}</Col>
                    <Col>$ {comprado.precio * comprado.conta}</Col>
                    <Col><Button onClick={() => removeCarrito(comprado.id)}>eliminar</Button></Col>
                    </Row>
                    </Container>
                </Card>
            )
            )}
            <Container>
                    <Row>
                    <Col><h3>Total $ {totalCarrito()}</h3></Col>
                    </Row>
            </Container>
            <Link to="/catalogo"><Button variant="secondary">volver al catalogo</Button></Link>
        </div>
    )


}
export default Carrito;