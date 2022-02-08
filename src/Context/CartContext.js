import { createContext, useState } from "react";
import Carrito from "../pages/Carrito";

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [addCarrito, setCarrito] = useState([]);

    const agregaCarrito = (item, cantidad) => {
        if (estaEnCarrito(item.id)) {
            const agregaCant = addCarrito.findIndex((el) => el.id === item.id);
            addCarrito[agregaCant].cantidad = addCarrito[agregaCant].cantidad + cantidad;

            setCarrito([...addCarrito])
        } else {
            const nuevoProd = {
                id: item.id,
                titulo: item.titulo,
                description: item.description,
                detalle: item.precio,
                precio: item.detalle,
                stock: item.stock,
                img: item.img,
                cantidad: cantidad,
                subtotal: item.precio * cantidad,
            };
            setCarrito([...addCarrito, nuevoProd])
        }
    }


    const estaEnCarrito = (id) => {
        return addCarrito.some((item) => item.id === id)

    }


    const removeCarrito = (itemId) => {
        const sacaItem = addCarrito.filter((item) => item.id !== itemId)
        setCarrito(sacaItem)
        console.log('se elimino', itemId)
    }


    const totalCarrito = () => {
        return addCarrito.reduce((acum, item) => acum + item.conta * item.precio, 0)

    }
    const cantidadItems = () => {
        return addCarrito.reduce(
            (acum, item) => acum + item.conta, 0);

    }


    return (
        <CartContext.Provider value={{ addCarrito, agregaCarrito, removeCarrito, totalCarrito, estaEnCarrito, cantidadItems }}>
            {children}
        </CartContext.Provider>
    );
};

// export const useCart = () => useContext(CartContext);
