import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Components/ItemsListConteiners/Card";


const ProductoPulsera = () => {
    const { catalogoCategoria } = useParams();
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
    const filtro = itemList.filter((Prod) => (Prod.titulo === "Pulsera"))

    if (isLoanding) return <h2>Cargando...</h2>;

    return (
        <div >
            <h1>Pulsera</h1>
            <div>
                <Link className="link-catalogo" to="/catalogo">volver</Link>
                <Link className="link-catalogo" to="/catalogo/catalogoPanuelo">Panuelo</Link>
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

export default ProductoPulsera; 