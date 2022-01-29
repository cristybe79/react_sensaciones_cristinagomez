import logo from "../../img/logo1.jpg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="Menu">
      <div>
        <img className="App-logo" src={logo} alt="logo"></img>
      </div>

      <div className="Menu-link">
        <ul className="link-item">
          <li className="link-li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="link-li">
            <Link to="/QuienesSomos">Quienes Somos</Link>
          </li>
          <li className="link-li">
            <Link to="/Catalogo">Catalogo</Link>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};
export default Menu;
