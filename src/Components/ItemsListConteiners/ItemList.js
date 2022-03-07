import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "./Card";
import "./Card.css";
import "./ItemsListConteiners.css";
import { getFirestore } from "../../firebase/index";
import { Dropdown } from "react-bootstrap";




const ItemList = () => {
    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        const db = getFirestore();
        const catalogoCollection = db.collection('catalogo')
        const getDataFronFirestore = async () => {
            try {
                const response = await catalogoCollection.get();
                if (response.empty) {
                    console.log("No hay productos")
                }
                setItemList(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (err) {
                setError(err)
            } finally {
                setProcesando(false)
            }
        };

        getDataFronFirestore();


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
    const goToCollar = () => {
        navigate("/catalogo/catalogoCollar");
    };
    if (procesando) {
        return <h2 className="titulo2">Procesando...</h2>;
    } else if (error) {
        return <h3 className="titulo2">Error de Proceso</h3>;
    } else
        return (
            <div >
                <div className="barra-catalogo">
                    <Link to="/">
                        <h4>Volver al Inicio</h4>
                    </Link>
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Productos
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={goToPulsera}>Pulseras</Dropdown.Item>
                        <Dropdown.Item onClick={goTotobillera}>
                            Tobilleras
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={goToCollar}>
                            Collares
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={goToPanuelo}>
                            Pañuelos
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="contenedor-Card">
                    {itemList.map((Prod) => (
                        <Card key={Prod.id} prod={Prod} />
                    ))}
                </div>
            </div>
        );




}

export default ItemList;









