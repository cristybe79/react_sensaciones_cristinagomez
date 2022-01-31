import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/itemDetailContainer/CardDetail";
import ItemsCount from "../Components/itemDetailContainer/itemsCount";


const ProductoDetalle = () => {
    const { catalogoId } = useParams();
    const [product, setProduct] = useState();
    const [isLoanding, setIsLoanding] = useState(false)

    useEffect(() => {
        const URL2 = `http://localhost:3001/catalogo/${catalogoId}`;
        setIsLoanding(true)

        fetch(URL2)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .finally(() => setIsLoanding(false));
    }, [catalogoId]);

    if (isLoanding || !product) return <h2>Cargando...</h2>

    return (
        <div>
            <h1>{product.titulo}</h1>
            <CardDetail key={product.id}
                img={product.img} titulo={product.titulo} detalle={product.detalle} descripcion={product.descripcion}
                precio={product.precio}
                id={product.id}
                stock={product.stock}
            />

        </div>
    );
};

export default ProductoDetalle; 