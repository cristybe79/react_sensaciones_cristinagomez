
import './itemsCount.css';
import { Button } from 'react-bootstrap'
import { useState } from 'react';

const ItemsCount = ({ stock, inicial, onAdd }) => {

    const [conta, setConta] = useState(inicial)

    const restar = () => {
        if (conta > 0) {
            setConta(conta - 1)
        }
    }
    const sumar = () => {
        if (conta < stock) {
            setConta(conta + 1)
        }
    }

    return (
        <div>
            <div className="contador">
                <button className="bot-restar" onClick={restar}>
                    -
                </button>
                <p className="numero">{conta}</p>
                <button className="bot-sumar" onClick={sumar}>
                    +
                </button>

            </div>
            <div className="seccion-btn">

                <Button variant="secondary" onClick={() => onAdd()}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );



}
export default ItemsCount;

