import { useEffect, useState } from "react";
import Card from "../Components/ItemsListConteiners/Card";
import { Link } from "react-router-dom";

const ProductoTobillera = () => {
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
    const filtro = itemList.filter((Prod) => (Prod.titulo === "Tobillera"))

    if (isLoanding) return <h2>Cargando...</h2>;

    return (
        <div >
            <h1>Tobilleras</h1>
            <div>

                <Link className="link-catalogo" to="/catalogo">volver</Link>
                <Link className="link-catalogo" to="/catalogo/catalogoPanuelo">Panuelo</Link>
                <Link className="link-catalogo" to="/catalogo/catalogoPulsera">Pulsera</Link>
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

export default ProductoTobillera; 