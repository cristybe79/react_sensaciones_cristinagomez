
import "./ItemsListConteiners.css";
import "./Card.css";

import ItemList from "./ItemList";

const Producto = (props) => <p className="Titulo-Uno">{props.greeting}</p>;

function ItemsListConteiner() {
    return (
        <>
            <div className="contenedor-Card">
                <ItemList/>

            </div>
        </>
    );
}

export default ItemsListConteiner;
