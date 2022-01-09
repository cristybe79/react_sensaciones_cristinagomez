import logo from '../img/logo1.jpg'
import './NavBar.css'


const Menu = () => {
    return (
        
        <nav class="menu">
            <div ><img className="App-logo" src={logo} alt="logo" ></img></div>
            <div className="menu-link">
                <a className="link-item">Quienes Somos </a>
                <a className="link-item">Catalogo </a>
                <a className="link-item">Contacto </a>                
            </div>

</nav>
    )
}
export default Menu;