import logoo from '../img/logoo.jpg'
import imgPort from '../img/pulsera01.jpg'
import './HomePage.css'
const HomePage = () => {
    return (
        <div >
            <div className="pageInicio">
                <div >
                    <img className="logoo" src={logoo} alt="logo" />
                </div>
                <div >
                    <img className="pageInicioHij" src={imgPort} alt="logo" />
                </div>
            </div>

        </div>
    );
};

export default HomePage;