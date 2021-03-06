import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css';


function Card({ prod }) {
  const navigate = useNavigate();

  return (
    <div className="Card">
      <div className="Card-Body">
        <h4 className="Card-Titulo">{prod.titulo}</h4>
        <img className="Card-img" src={prod.img} alt={prod.titulo}></img>
      </div>

      <div className="Card-Body">
        <p className="Card-Text">{prod.detalle}</p>
        <p className="Card-Text">${prod.precio}</p>
        <p className="Card-Text">Stock {prod.stock}</p>
      </div>
      <Button
        variant="secondary"
        onClick={() => navigate(`/catalogo/${prod.id}`)}
      >
        Ver mas
      </Button>
    </div>
  );
}

export default Card;