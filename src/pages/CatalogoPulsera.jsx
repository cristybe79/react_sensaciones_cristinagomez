import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/ItemsListConteiners/Card";
import { getFirestore } from "../firebase";

const ProductoPulsera = () => {
    // const { catalogoCategoria } = useParams();
    const [itemList, setItemList] = useState([]);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const db = getFirestore();
        const catalogoCollection = db.collection('catalogo').where("titulo", "==", "Pulsera")
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

    if (procesando) return <h2>Cargando...</h2>;

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

export default ProductoPulsera; 