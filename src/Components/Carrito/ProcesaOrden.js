import * as React from "react"
import { getFirestore } from "../../firebase/index";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProcesaOrden = () => {
    const { ordenId } = useParams();
    const [exito, setExito] = useState({

    });

    useEffect(() => {
      const db = getFirestore()
        db.collection("ordenes")
            .doc(ordenId)
            .get()
            .then((res) => setExito({ id: res.id, ...res.data() }));

    }, [ordenId]);


    return (
      <div>
        <h2>Gracias por su Compra</h2>
        <h3>Detalle de su Compra{exito.items[0].item.nombre}</h3>
      </div>
    );


}

export default ProcesaOrden