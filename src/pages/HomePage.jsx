import logoo from '../img/logoo.jpg'
import logo from "../img/sensaciones (2).png"
import imgPort from '../img/portada01.jpg'
import imgPort2 from '../img/portada02.webp'
import imgPort3 from '../img/tb001.jpeg'
import imgPort4 from '../img/imgpl1.jpg'
import imgPort5 from '../img/pan001.jpg'
import imgPort6 from '../img/pan002.jpg'
import imgPort7 from '../img/pan003.jpg'
import './HomePage.css'
import Catalogo from '../pages/Catalogo'
import cargador from '../firebase/Cargador'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div className="maininicio">
            {/* <Link to="/Cargador">Cargador</Link> */}
            <div className="pageInicio">
                <Link className="Titulo" to="/Catalogo"><h2>Coleccion</h2></Link>
                <div className="pageInicioMay">
                    <section className="pageInicioHij"><img className="port2" src={imgPort2} alt="img2"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort3}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort4}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort5}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort6}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort7}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort2}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort3}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort4}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort5}></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort6}></img></section>

                </div>
            </div>
        </div>
    );
};

export default HomePage;