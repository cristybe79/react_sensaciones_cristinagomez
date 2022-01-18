import Card from "./Card";
import "./ItemsListConteiners.css";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Imgpl1 from "../img/imgpl1.jpg";

const Producto = (props) => <p className="Titulo-Uno">{props.greeting}</p>;

function ItemsListConteiner() {
    return (
        <>
            <div>
                <Producto greeting="Catalogo" />
                <Card
                    img={Img1}
                    id="001"
                    titulo="Pulsera"
                    detalle="pulera color rojo"
                    precio="200"
                ></Card>
                <Card
                    img={Img2}
                    id="002"
                    titulo="Pulsera"
                    detalle="pulera color negra"
                    precio="200"
                ></Card>
                <Card
                    img={Imgpl1}
                    id="003"
                    titulo="Pulsera"
                    detalle="pulera plata"
                    precio="350"
                ></Card>
            </div>
        </>
    );
}

export default ItemsListConteiner;
