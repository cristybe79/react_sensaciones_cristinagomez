import { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.css";
import "./ItemsListConteiners.css";



const ItemList = () => {

    const [itemList, setItemList] = useState([]);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        const URL = `http://localhost:3001/catalogo`;
        setProcesando(true)
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setItemList(data))
            .catch((err) => setError(err))
            .finally(() => setProcesando(false));
    }, []);
    if (procesando) {
        return <h2>Procesando...</h2>;
    } else if (error) {
        return <h3>Error de Proceso</h3>
    } else
        return (
            <div className="contenedor-Card">
                {
                    itemList.map((Prod) => (
                        <Card
                            key={Prod.id}
                            prod={Prod}
                        />
                    ))
                }



            </div>
        );




}

export default ItemList;









