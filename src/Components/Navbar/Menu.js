import logo from "../../img/logo1.jpg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const Menu = () => {
  return (
    <nav className="Menu">
      <div>
        <img className="App-logo" src={logo} alt="logo"></img>
      </div>
      <div className="Menu-link">
        <p className="link-item">Quienes Somos </p>
        <p className="link-item">Catalogo </p>
        <p className="link-item">Contacto </p>
        <CartWidget />
        </div>
        <div>

        </div>
    </nav>
  );
};
export default Menu;
