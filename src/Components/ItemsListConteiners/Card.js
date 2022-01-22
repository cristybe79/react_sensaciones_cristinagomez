import React from 'react';
import './Card.css';
import ItemsCounts from './itemsCount';



function Card({ id, titulo, detalle, precio, img, stock }) {
  return (
    <div className="Card">
      <div className="Card-Body">
        <img className="Card-img" src={img}></img>
      </div>

      <div className="Card-Body">
        <p className="Card-Text">Cod:{id}</p>
        <h4 className="Card-Titulo">{titulo}</h4>
        <p className="Card-Text">{detalle}</p>
        <p className="Card-Text">${precio}</p>
      </div>
      <ItemsCounts />
    </div>
  );
}


export default Card;