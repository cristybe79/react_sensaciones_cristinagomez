import { useEffect, useState } from "react";
import Card from "../Components/ItemsListConteiners/Card";
import { Link } from "react-router-dom";
import './Catalogo.css'

const ProductoPanuelo = () => {
    const [itemList, setItemList] = useState([]);
    const [isLoanding, setIsLoanding] = useState(false)

    useEffect(() => {
        const URL3 = `http://localhost:3001/catalogo`;
        setIsLoanding(true)
        fetch(URL3)
            .then((res) => res.json())
            .then((data) => setItemList(data))
            .finally(() => setIsLoanding(false));
    }, []);

    console.log(setItemList)
    const filtro = itemList.filter((Prod) => (Prod.titulo === "Pañuelo"))

    if (isLoanding) return <h2>Cargando...</h2>;

    return (
        <div>
            <h1>Pañuelos</h1>
            <div>
                <Link className="link-catalogo" to="/catalogo">volver</Link>
                <Link className="link-catalogo" to="/catalogo/catalogoPulsera">Pulsera</Link>
                <Link className="link-catalogo" to="/catalogo/catalogoTobillera">Tobillera</Link>

            </div>
            <div className="contenedor-Card">

                {
                    filtro.map((Prod) => (
                        <Card
                            key={Prod.id}
                            prod={Prod}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductoPanuelo; 