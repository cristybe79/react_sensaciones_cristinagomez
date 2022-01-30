import { Link } from "react-router-dom"

const error404 = () => {
    return (
        <div>
            <h1>Error 404 NO FOUNT</h1>
            <h2>Disculpe... error de pagina </h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default error404;