import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase";




const ItemDetailContainer = () => {
  const { catalogoId } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoanding, setIsLoanding] = useState(false);


  useEffect(() => {
    const db = getFirestore()
    const catalogoCollection = db.collection('catalogo')
    const productoSeleccionado = catalogoCollection.doc(catalogoId)
    productoSeleccionado.get().then((response) => {
      if (!response.exists) console.log('el producto no existe');
      setProduct({ ...response.data(), id: response.id })
    })


  }, [catalogoId]);



  if (isLoanding || !product) return <h2>Cargando...</h2>;

  return (
    <div className="maininicio">
      <h1>{product.titulo}</h1>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
