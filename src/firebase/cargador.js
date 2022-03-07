import { Link } from "react-router-dom";
import { getFirestore } from ".";
const catalogo = [
  {
    titulo: "Collar",
    detalle: "Piedras rojas y doradas",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll001.png",
  },
  {
    titulo: "Collar",
    detalle: "Largo, Best Friend",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll002.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Dorado, Infinito Corazon",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll003.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Plata, Corazones",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll004.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Piedras Azules",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll005.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Piedras Negras",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll006.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Perlas",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll007.jpg",
  },
  {
    titulo: "Collar",
    detalle: "PLata Corazon",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll008.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Piedras, Colores",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll009.jpg",
  },
  {
    titulo: "Collar",
    detalle: "Hilo y PLata",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 15,
    img: "../images/coll010.jpg",
  },
];

const Cargador = () => {
  const db = getFirestore();
  const collection = db.collection("catalogo");

  const createProdutOnFirestore = () => {
    catalogo.forEach((producto) => {
      collection
        .add(producto)
        .then((res) => console.log("usuario agregado", res))
        .catch((err) => console.log("se rompio", err));
    });
  };

  return (
    <div>
      <h1>Cargador Firebase</h1>
      <button onClick={createProdutOnFirestore}>agregar producto</button>
      <Link to="/">
        <h4>Volver al Inicio</h4>
      </Link>
    </div>
  );
};

export default Cargador;
