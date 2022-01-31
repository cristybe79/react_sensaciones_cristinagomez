
import './itemsCount.css';

const ItemsCount = ({ conta, setConta, stockRes, setStockRes }) => {

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
    return (
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
    );



}
export default ItemsCount;

