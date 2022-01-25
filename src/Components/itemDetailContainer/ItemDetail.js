import { useState, useEffect } from "react";
import Catalogo from "../ItemsListConteiners/Catalogo";
import CardDetail from "./CardDetail";
import "./ItemDetailContainer.css"

const ItemDetail = () => {
    const [itemListDetail, setItemDetail] = useState([{}]);
    const [isLoanding, setisLoanding] = useState(false);

    useEffect(() => {
        function traeDetalle() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(Catalogo), 2000);
            });
        }
        setisLoanding(true);
        traeDetalle()
            .then((data) => setItemDetail(data))
            .catch((error) => console.log(error))
            .finally(() => setisLoanding(false));
    }, []);
    return (
        <div className="contenedor-Card">
            {isLoanding ? (
                <h2>Procesando...</h2>
            ) : (
                itemListDetail.map((Prod) => (
                    <CardDetail
                        key={Prod.id}
                        id={Prod.id}
                        titulo={Prod.titulo}
                        detalle={Prod.detalle}
                        precio={Prod.precio}
                        img={Prod.img}
                        descripcion={Prod.descripcion}
                    />
                ))
            )}
        </div>
    );
};
export default ItemDetail