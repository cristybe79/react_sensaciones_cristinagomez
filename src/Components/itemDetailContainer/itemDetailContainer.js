import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const { catalogoId } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoanding, setIsLoanding] = useState(false);


  useEffect(() => {
    const URL2 = `http://localhost:3001/catalogo/${catalogoId}`;
    setIsLoanding(true);

    fetch(URL2)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoanding(false));
  }, [catalogoId]);
    


  if (isLoanding || !product) return <h2>Cargando...</h2>;

  return (
    <div>
      <h1>{product.titulo}</h1>
      <ItemDetail product={product}/>
    </div>
  );
};

export default ItemDetailContainer;
