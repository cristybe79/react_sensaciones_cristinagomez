import { useState, useContext } from "react";
import { getFirestore } from "../../firebase/index";
import { CartContext } from "../../Context/CartContext";


const GenerarOrden = () => {
    const { addCarrito, totalCarrito } = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: "",
        telefono: "",
        email: "",

    });
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.nombre.length < 3) {
            alert('nombre no es valido')
            return
        }
        if (values.telefono.length < 5) {
            alert('ingrese por lo menos 5 digitos')
            return
        }
        if (values.email.length < 3) {
            alert('mail no valido')
            return
        }
        const orden = {
            buyer: {
                nombre: values.nombre,
                telefono: values.telefono,
                mail: values.email
            },
            items: addCarrito.map((el) => ({
                detalle: el.detalle,
                precio: el.precio,
                cantidad: el.cantidad,
            })),
            total: totalCarrito(),
        };
        console.log(orden);
        const db = getFirestore();
        db.collection("ordenes")
            .add(orden)
            .then((res) => alert("Orden Registrada", res))
            .catch((err) => alert("No se registro la orden", err));
    };


    return (
        <>
            <div>
                <h2>Complete sus datos</h2>
                <hr />
                <div>
                    <h4>Ingrese sus Datos</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre"> nombre: </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Escriba Su nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="telefono"> telefono: </label>
                        <input
                            type="number"
                            id="telefono"
                            name="telefono"
                            placeholder="123456"
                            value={values.telefono}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="telefono"> @mail: </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="juan@mail.com"
                            value={values.email}
                            onChange={handleInputChange}
                        ></input>
                        <button className="btn btn-secondary" type="submit">
                            Finalizar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default GenerarOrden;