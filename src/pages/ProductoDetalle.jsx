import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardDetail from "../Components/itemDetailContainer/CardDetail";


const ProductoDetalle = () => {
    const { catalogoId } = useParams();
    const [product, setProduct] = useState();
    const [isLoanding, setIsLoanding] = useState(false)

    useEffect(() => {
        const URL2 = `http://localhost:3001/catalogo/${catalogoId}`;
        setIsLoanding(true)
        console.log(URL2)
        fetch(URL2)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .finally(() => setIsLoanding(false));
    }, [catalogoId]);
    console.log(setProduct)

    if (isLoanding || !product) return <h2>Cargando...</h2>;

    return (
        <div>
            <h1>{product.titulo}</h1>
            <CardDetail key={product.id}
                img={product.img} titulo={product.titulo} detalle={product.detalle} descripcion={product.descripcion}
                precio={product.precio}
                id={product.id}
            />

        </div>
    );
};

export default ProductoDetalle; 