
import './itemsCount.css';
import { Button } from 'react-bootstrap'

const ItemsCount = ({ conta, setConta, stockRes, setStockRes, onAdd }) => {

    const sumar = () => {
        if (conta < stockRes) {
            setConta(conta + 1)
            setStockRes(stockRes - conta)
        }
    }
    const restar = () => {
        if (conta > 0) {
            setConta(conta - 1)
        };
    }
    const cantConta = () => {
        onAdd = (stockRes - conta)
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
                <p className="numero">Stock:{stockRes - conta}</p>
            </div>
            <div className="seccion-btn">

                <Button variant="secondary" onAdd={cantConta}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );



}
export default ItemsCount;

