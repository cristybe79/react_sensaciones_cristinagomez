import logo from "../../img/sensaciones (2).png";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Login from "./Login";


const Menu = () => {
  

  return (
    <nav className="Menu">
      <div>
        <img className="App-logo" src={logo} alt="logo"></img>
        <div className="Menu-link">
          <CartWidget />
          <Login />
        </div>

        <Link to="/" />
      </div>
    </nav>
  );
};
export default Menu;
