
import imgPort from '../img/portada01.jpg'
import imgPort1 from '../img/coll001.jpg'
import imgPort2 from '../img/portada02.webp'
import imgPort3 from '../img/tb001.jpeg'
import imgPort4 from '../img/imgpl1.jpg'
import imgPort5 from '../img/pan001.jpg'
import imgPort6 from '../img/pan002.jpg'
import imgPort7 from '../img/pan003.jpg'
import imgPort8 from '../img/coll006.jpg'
import imgPort9 from '../img/coll005.jpg'
import imgPort10 from '../img/coll009.jpg'
import imgPort11 from '../img/tb003.png'
import imgPort12 from '../img/tb005.jpg'
import './HomePage.css'

import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div className="maininicio">
            {/* <Link to="/Cargador">Cargador</Link> */}
            <div className="pageInicio">
                <Link className="Titulo" to="/Catalogo"><h2>Coleccion</h2></Link>
                <div className="pageInicioMay">
                    <section className="pageInicioHij"><img className="port2" src={imgPort1} alt="img1"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort3} alt="img3"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort4} alt="img4"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort5} alt="img5"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort6} alt="img6"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort7} alt="img7"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort} alt="img"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort2} alt="img2"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort10} alt="img10"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort11} alt="img11"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort12} alt="img12"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort8} alt="img8"></img></section>
                    <section className="pageInicioHij"><img className="port2" src={imgPort9} alt="img9"></img></section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;