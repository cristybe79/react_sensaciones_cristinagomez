import * as React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { CartContext } from "../../Context/CartContext";
import { getFirestore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import FormCarrito from "./FormCarrito";
import './Carrito.css';




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
    const handleSubmit = async (e) => {
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
        // const cliente = {
        //     nombre: values.nombre,
        //     telefono: values.telefono,
        //     mail: values.email
        // }
        const producto = {
            items: addCarrito.map((el) => ({
                producto: el.id,
                titulo: el.titulo,
                detalle: el.detalle,
                precio: el.precio,
                cantidad: el.cantidad,
            }))
        }
        console.log(producto)
        const orden = {
            nombre: values.nombre,
            items: addCarrito.map((el) => ({
                id: el.id,
                titulo: el.titulo,
                detalle: el.detalle,
                precio: el.precio,
                cantidad: el.cantidad,
            })),
            total: totalCarrito(),
        };
        console.log(orden);
        const db = getFirestore();
        const muestraOrden = db.collection("ordenes")
        const response = await muestraOrden.add(orden)
        vaciarCarrito()
        navigate(`/orden/${response.id}`)

    };





    return (
        <div className="maininicio">
            {
                addCarrito.length === 0 ? <>
                    <h2>No hay Productos en el Carrito</h2>
                    <Link to="/"><Button>Ir al Catalogo</Button></Link>
                </> :
                    <>
                        <h2 className="titulo2">Resumen de Compra</h2>
                        {addCarrito.map((comprado) =>
                        (
                            <Card key={comprado.id} className="resumenCompra">
                                <Container >
                                    <Row >
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
                            <Row >
                                <Col><h3>Total $ {totalCarrito()}</h3></Col>
                            </Row>
                            <Link to="/catalogo"><Button className="botones" variant="secondary">volver al catalogo</Button></Link>
                            <Button className="botones" onClick={() => vaciarCarrito()}>Limpiar</Button>
                        </Container>


                        <>
                            <Card className="resumenCompra">
                                <Container>
                                    <h2>Complete sus datos</h2>
                                    <hr />
                                    <div>
                                        <h4>Ingrese sus Datos</h4>

                                        <form onSubmit={handleSubmit}>
                                            <FormCarrito label="nombre" name="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Escriba su nombre" />
                                            <FormCarrito label="telefono" name="telefono" onChange={handleInputChange} value={values.telefono} placeholder="Escriba su numero" />
                                            <FormCarrito label="email" name="email" onChange={handleInputChange} value={values.email} placeholder="email" />
                                            <button type="submit" className="botones btn btn-secondary" >finalizar </button></form>
                                    </div>
                                </Container>

                            </Card>
                        </>
                    </>

            }
        </div>


    )


}
export default Carrito;