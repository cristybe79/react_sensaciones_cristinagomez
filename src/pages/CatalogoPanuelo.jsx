import { useEffect, useState } from "react";
import Card from "../Components/ItemsListConteiners/Card";
import { Link } from "react-router-dom";
import './Catalogo.css'
import { getFirestore } from "../firebase";



const ProductoPanuelo = () => {
    const [itemList, setItemList] = useState([]);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        const db = getFirestore();
        const catalogoCollection = db.collection('catalogo').where("titulo", "==", "Pañuelo")
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

    console.log(setItemList)


    if (procesando) { return <h2>Cargando...</h2>; }
    else if (error) {
        return <h3>Error de Proceso</h3>
    } else
        return (
            <div className="maininicio">
                <h1 className="titulo2">Pañuelos</h1>
                <div>
                    <Link className="link-catalogo" to="/catalogo">volver</Link>
                    <Link className="link-catalogo" to="/catalogo/catalogoPulsera">Pulsera</Link>
                    <Link className="link-catalogo" to="/catalogo/catalogoTobillera">Tobillera</Link>
                    <Link className="link-catalogo" to="/catalogo/catalogoCollar">Collar</Link>
                </div>
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
            </div>
        );
};

export default ProductoPanuelo; 