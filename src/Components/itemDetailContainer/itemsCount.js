
import './itemsCount.css';


const ItemsCount = ({ stock,conta,setConta }) => {


    const restar = () => {
        if (conta > 0) {
            setConta((prev) => prev - 1)
        }
    }
    const sumar = () => {
        if (conta < stock) {
            setConta((prev) => prev + 1);
        }
    }

    return (
      <div>
        <div className="contador">
          <button className="bot-restar"onClick={restar}>-</button>
          <p className="numero">{conta}</p>
          <button className="bot-sumar" onClick={sumar}>+
          </button>

        </div>
      </div>
    );



}
export default ItemsCount;

