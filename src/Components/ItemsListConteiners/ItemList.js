import { useState, useEffect } from "react";
import Catalogo from "./Catalogo";
import Card from "./Card";
import "./Card.css";
import "./ItemsListConteiners.css";


const ItemList = () => {
    const [itemList, setItemList] = useState([{}])
    const [procesando, setProcesando] = useState(false);

    useEffect(() => {
        function traeCatalogo() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(Catalogo), 2000);
            })
        }
        setProcesando(true);
        traeCatalogo()
            .then((data) => setItemList(data))
            .catch((error) => console.log(error))
            .finally(() => setProcesando(false))
    },[]);
    return (
      <div className="contenedor-Card">
        {procesando ? (
          <h2>Procesando...</h2>
        ) : (
          itemList.map((Prod) => (
            <Card
              key={Prod.id}
              id={Prod.id}
              titulo={Prod.titulo}
              detalle={Prod.detalle}
              precio={Prod.precio}
              img={Prod.img}
            />
          ))
        )}

      </div>
    );



}

export default ItemList;









