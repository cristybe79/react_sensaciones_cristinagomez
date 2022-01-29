import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css';


function Card({ prod }) {
  const navigate = useNavigate();

  return (
    <div className="Card">
      <div className="Card-Body">
        <img className="Card-img" src={prod.img} alt={prod.titulo}></img>
      </div>

      <div className="Card-Body">
        <h4 className="Card-Titulo">{prod.titulo}</h4>
        <p className="Card-Text">{prod.detalle}</p>
        <p className="Card-Text">${prod.precio}</p>
        <p className="Card-Text">{prod.id}</p>
      </div>
      <Button onClick={() => navigate(`/catalogo/${prod.id}`)}>Ver mas</Button>
    </div>
  );
}

export default Card;