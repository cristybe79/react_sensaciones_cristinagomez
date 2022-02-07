import { createContext, useState } from "react";
import Carrito from "../pages/Carrito";

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [addCarrito, setCarrito] = useState([]);
    
    const agregaCarrito = (item) => {
        
        setCarrito([...addCarrito,item])
} 



    
    const removeCarrito = (itemId) => {
        const sacaItem = addCarrito.filter((prod)=>prod.id !==itemId)
        setCarrito(sacaItem)
        console.log('se elimino',itemId)
    }
    const estaEnCarrito = (id) => {
        return addCarrito.some((prod)=>prod.id ===id)
        
    }


    const totalCarrito = () => {
        return addCarrito.reduce((acum, prod) => acum + prod.conta * prod.precio, 0)
        
    }
    const cantidadItems = () => {
        return addCarrito.reduce(
            (acum, prod) => acum + prod.conta, 0);

        }


    return (
    <CartContext.Provider value={{ addCarrito, agregaCarrito,removeCarrito,totalCarrito ,estaEnCarrito,cantidadItems}}>
    {children}
    </CartContext.Provider>
);
};

// export const useCart = () => useContext(CartContext);
