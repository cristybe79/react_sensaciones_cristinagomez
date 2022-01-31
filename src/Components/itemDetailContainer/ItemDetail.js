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
                itemListDetail.map((prod) => (
                    <CardDetail
                        key={prod.id}
                        id={prod.id}
                        titulo={prod.titulo}
                        detalle={prod.detalle}
                        precio={prod.precio}
                        img={prod.img}
                        stock={prod.stock}
                        descripcion={prod.descripcion}
                    />
                ))
            )}
        </div>
    );
};
export default ItemDetail