import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [addCarrito, setCarrito] = useState([]);


    const agregaCarrito = (product, cantidad) => {
        if (estaEnCarrito(product.id)) {
            const actualizarCant = addCarrito.findIndex(el => el.id === product.id)
            addCarrito[actualizarCant].cantidad =addCarrito[actualizarCant].cantidad + cantidad
            setCarrito([...addCarrito])
            console.log(addCarrito)
        } else {
            const newItem = {
                id: product.id,
                titulo: product.titulo,
                precio: product.precio,
                detalle: product.detalle,
                img:product.img,
                cantidad:product.cantidad
            }
            setCarrito([...addCarrito, newItem])
            console.log(newItem)
        }
    }


    const estaEnCarrito = (id) => {
        return addCarrito.some((product) => product.id === id)

    }


    const removeCarrito = (itemId) => {
        const sacaItem = addCarrito.filter((product) => product.id !== itemId)
        setCarrito(sacaItem)
        console.log('se elimino', itemId)
    }


    const totalCarrito = () => {
        return addCarrito.reduce((acum, product) => acum + product.cantidad * product.precio, 0)

    }
    const contaItems = () => {
        return addCarrito.reduce(
            (acum, product) => acum + product.cantidad, 0);

    }


    return (
        <CartContext.Provider value={{ addCarrito, agregaCarrito, removeCarrito, totalCarrito, estaEnCarrito, contaItems }}>
            {children}
        </CartContext.Provider>
    );
};

// export const useCart = () => useContext(CartContext);
