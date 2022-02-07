import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/itemDetailContainer/ItemDetail";



const ProductoDetalle = () => {
    const { catalogoId } = useParams();
    const [product, setProduct] = useState([]);
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
            <ItemDetail id={product.id} precio={product.precio} titulo ={product.titulo} descripcion ={product.descripcion} stock={product.stock} img={product.img} detalle={product.detalle}


            />

        </div>
    );
};

export default ProductoDetalle; 