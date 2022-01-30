import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Card.css";
import "./ItemsListConteiners.css";




const ItemList = () => {
    const navigate = useNavigate();
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
    const goToPulsera = () => {
        navigate("/catalogo/catalogoPulsera");
    };
    const goTotobillera = () => {
        navigate("/catalogo/catalogoTobillera");
    };
    const goToPanuelo = () => {
        navigate("/catalogo/catalogoPanuelo");
    };
    if (procesando) {
        return <h2>Procesando...</h2>;
    } else if (error) {
        return <h3>Error de Proceso</h3>
    } else
        return (
            <div>
                <div className="barra-catalogo">
                    <button className="btn-cat" onClick={goToPulsera}>
                        Pulsera
                    </button>
                    <button className="btn-cat" onClick={goTotobillera}>
                        Tobillera
                    </button>
                    <button className="btn-cat" onClick={goToPanuelo}>
                        Pañuelo
                    </button>
                </div>
                <div className="contenedor-Card">
                    {itemList.map((Prod) => (
                        <Card key={Prod.id} prod={Prod} />
                    ))}
                </div>
            </div>
        );




}

export default ItemList;









