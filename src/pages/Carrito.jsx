import * as React from "react";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { Button,Card ,Container,Row,Col} from 'react-bootstrap';
import { CartContext } from "../Context/CartContext"



const Carrito = () => {
    const { addCarrito, removeCarrito, totalCarrito, vaciarCarrito,  } = useContext(CartContext)
    

    return (
        <div>
            {
                addCarrito.length === 0 ? <>
                    <h2>No hay Productos en el Carrito</h2>
                    <Link to="/"><Button>Ir al Catalogo</Button></Link>
                </>:
                    <>
            <h2>Resumen de Compra</h2>
            {addCarrito.map((comprado) =>
            (
                <Card className="resumen-detail" key={comprado.id}>
                    <Container>
                    <Row>
                    <Col>{comprado.titulo}</Col>
                    <Col>{comprado.detalle}</Col>
                    <Col>{comprado.cantidad}</Col>
                    <Col>$ {comprado.precio * comprado.cantidad}</Col>
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
            <Button onClick={()=>vaciarCarrito()}>Limpiar</Button>
                    </>
}
        </div>


    )


}
export default Carrito;