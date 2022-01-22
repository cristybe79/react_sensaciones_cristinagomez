import { useState, useEffect } from "react";
import Catalogo from "./Catalogo";
import Card from "./Card";
import "./Card.css";
import "./ItemsListConteiners.css";


const ItemList = () => {
    const [itemList, setItemList] = useState([{Catalogo}])

    useEffect(() => {
        function traeCatalogo() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(Catalogo), 2000);
            })
        }
        traeCatalogo()
            .then((data) => setItemList(data))
            .catch((error) => console.log(error))
    }, []);
        return (
        <div>
            {itemList.map((Prod) => (
                <Card className="contenedor-Card" key={Prod.id} titulo={Prod.titulo} detalle={Prod.detalle} precio={Prod.precio} img={Prod.img}/>
            ))}
        </div>
        );
            


}

export default ItemList;









