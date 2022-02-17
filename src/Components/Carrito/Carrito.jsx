import * as React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from "../../Context/CartContext";
import { getFirestore } from "../../firebase";
import { useNavigate } from "react-router-dom";




const Carrito = () => {

    const { addCarrito, removeCarrito, totalCarrito, vaciarCarrito, } = useContext(CartContext)
        const [values, setValues] = useState({
        nombre: "",
        telefono: "",
        email: "",

        });
        const navigate = useNavigate();
        const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.nombre.length < 3) {
            alert('nombre no es valido')
            return
        }
        if (values.telefono.length < 5) {
            alert('ingrese por lo menos 5 digitos')
            return
        }
        if (values.email.length < 3) {
            alert('mail no valido')
            return
        }
        const cliente = {
            nombre: values.nombre,
            telefono: values.telefono,
            mail: values.email
        }
        const orden = {
            cliente,
            items: addCarrito.map((el) => ({
                detalle: el.detalle,
                precio: el.precio,
                cantidad: el.cantidad,
            })),
            total: totalCarrito(),
        };
        console.log(orden);
        const db = getFirestore();
        const muestraOrden = db.collection("ordenes")
        muestraOrden
            .add(orden)
            .then((res) => {
                alert(`Sr/ra ${orden.cliente.nombre} orden nro ${res.id}`)
                navigate('/orden')
                vaciarCarrito()
            })
            .catch((err) => alert("No se registro la orden", err));
        
    };
    
    
    
    

    return (
        <div>
            {
                addCarrito.length === 0 ? <>
                    <h2>No hay Productos en el Carrito</h2>
                    <Link to="/"><Button>Ir al Catalogo</Button></Link>
                </> :
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
                        <Button onClick={() => vaciarCarrito()}>Limpiar</Button>

                        <>
            <div>
                <h2>Complete sus datos</h2>
                <hr />
                <div>
                    <h4>Ingrese sus Datos</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre"> nombre: </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Escriba Su nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="telefono"> telefono: </label>
                        <input
                            type="number"
                            id="telefono"
                            name="telefono"
                            placeholder="123456"
                            value={values.telefono}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="telefono"> @mail: </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="juan@mail.com"
                            value={values.email}
                            onChange={handleInputChange}
                                        ></input>

                            <button type="submit" className="btn btn-secondary" >finalizar </button>

                    </form>
                                </div>
            </div>
        </>
                    </>
                    
            }
        </div>


    )


}
export default Carrito;