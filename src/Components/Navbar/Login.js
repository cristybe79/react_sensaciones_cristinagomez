
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"
import Swal from "sweetalert2";



const Login = () => {
 const crearUsuario = () => {
   Swal.fire({
     title: "Ingresa tu nombre nombre y apellido",
     input: "text",
     showCancelButton: true,
     confirmButtonText: "Guardar",
     cancelButtonText: "Cancelar",
     inputValidator: (nombre) => {
       if (!nombre) {
         return "Por favor escribe tu nombre";
       } else {
         return undefined;
       }
     },
   }).then((resultado) => {
     if (resultado.value) {
       let nombre = resultado.value;
       Swal.fire("Hola, " + nombre);
     }
   });
 };
    return (
      <>
        <Link
          to=""
          aria-label="Show SweetAlert2 success message"
          onClick={crearUsuario}
          className="link-item"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </>
    );
        




};

export default Login;

