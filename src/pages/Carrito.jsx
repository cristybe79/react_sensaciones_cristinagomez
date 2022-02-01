import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const carrito = () => {
    
    return (
        <div>
            <h1>Resumen</h1>
            <div>
                <p>Titulo</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <h2>Total</h2>
            </div>
            <Link to="/catalogo"><Button variant="secondary">volver al catalogo</Button></Link>
        </div>
    )
    

}
export default carrito;