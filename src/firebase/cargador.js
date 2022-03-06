
import { getFirestore } from ".";
const producto = [
  {
    titulo: "Pulsera",
    detalle: "Hilo Roja perlitas doradas",
    descripcion: "descripcion descripcion descripcion",
    precio: 120,
    stock: 11,
    img: "../images/img1.jpg",
  },
  {
    titulo: "Pulsera",
    detalle: "Hilo Negra -infinito",
    descripcion: "descripcion descripcion descripcion",
    precio: 120,
    stock: 12,
    img: "../images/img2.jpg",
  },
  {
    titulo: "Pulsera",
    detalle: "Combinadas Blanca y Negra",
    descripcion: "descripcion descripcion descripcion",
    precio: 250,
    stock: 13,
    img: "../images/img3.jpg",
  },
  {
    titulo: "Pulsera",
    detalle: "Plata dije corazon",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 14,
    img: "../images/imgpl1.jpg",
  },
  {
    titulo: "Pulsera",
    detalle: "Plata denario",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 15,
    img: "../images/imgpl2.jpg",
  },
  {
    titulo: "Tobillera",
    detalle: "Plata hojas",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 16,
    img: "../images/tb001.jpeg",
  },
  {
    titulo: "Tobillera",
    detalle: "Plata Corazones",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 17,
    img: "../images/tb002.jpg",
  },
  {
    titulo: "Tobillera",
    detalle: "Dorada Estrellas",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 18,
    img: "../images/tb003.png",
  },
  {
    titulo: "Tobillera",
    detalle: "Hilo Negra",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 19,
    img: "../images/tb004.jpg",
  },
  {
    titulo: "Tobillera",
    detalle: "Hilo Rojo y PLata",
    descripcion: "descripcion descripcion descripcion",
    precio: 300,
    stock: 20,
    img: "../images/tb005.jpg",
  },
  {
    titulo: "Pañuelo",
    detalle: "Seda Blando con rojo y azul",
    descripcion: "descripcion descripcion descripcion",
    precio: 1500,
    stock: 21,
    img: "../images/pan001.jpg",
  },
  {
    titulo: "Pañuelo",
    detalle: "Seda Azul",
    descripcion: "descripcion descripcion descripcion",
    precio: 1100,
    stock: 22,
    img: "../images/pan002.jpg",
  },
  {
    titulo: "Pañuelo",
    detalle: "Seda Celeste",
    descripcion: "descripcion descripcion descripcion",
    precio: 1200,
    stock: 23,
    img: "../images/pan003.jpg",
  },
  {
    titulo: "Pañuelo",
    detalle: "Gasa Blanco estampado",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 24,
    img: "../images/pan004.jpg",
  },
  {
    titulo: "Pañuelo",
    detalle: "Gasa Floral",
    descripcion: "descripcion descripcion descripcion",
    precio: 1000,
    stock: 25,
    img: "../images/pan005.jpg",
  },
];
const usuario = [
  {
    apellido:"Lopez",
    nombre: "Juan",
    telefono: 1234564,
    email: "juanlopez@mail.com",
    
  },
    {
    apellido:"Garcia",
    nombre: "Ana",
    telefono: 789456,
    email: "garciaana@mail.com",
    
  },
      {
    apellido:"Ferrero",
    nombre: "Maria",
    telefono: 5647891,
    email: "ferreromaria@mail.com",
    
  },
{
    apellido:"Sanchez",
    nombre: "Pedro",
    telefono: 8524561,
    email: "sanchezpedro@mail.com",
    
  }


]
const Cargador = () => {
  const db = getFirestore();
  const collection = db.collection("usuario");

  const createProdutOnFirestore = () => {
    usuario.forEach((producto) => {
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
    </div>
  );
};

export default Cargador;
