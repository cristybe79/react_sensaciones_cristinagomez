import React, { useState } from "react";
import './itemsCount.css';

const ItemsCount = ({ stockInicial = 0, stock = 10 }) => {
    const [conta, setConta] = useState(stockInicial);
    const sumar = () => {
        if (conta < stock) setConta(conta + 1);
    }
    const restar = () => {
        if (conta > 0) setConta(conta - 1);
    }
    return (
        <div className="contador">
            <button className="bot-restar" onClick={restar}>-</button>
            <p className="numero">{conta}</p>
            <button className="bot-sumar" onClick={sumar}>+</button>
            <p className="numero">Stock:{stock}</p>
        </div>
    );



}
export default ItemsCount;

