import './Card.css';



function Card({id, titulo, detalle, precio,img}) {
    return (
      <div className="Card">
        <img src={img}></img>
        <div ClassName="Card-Body">
          <p ClassName="Card-Text">Cod:{id}</p>
          <h4 ClassName="Card-Titulo">{titulo}</h4>
          <p ClassName="Card-Text">{detalle}</p>
          <p ClassName="Card-Text">${precio}</p>
        </div>
      </div>
    );
}


export default Card;