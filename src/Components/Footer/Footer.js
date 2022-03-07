
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import './Footer.css';
function Footer() {
  return (
    <>
      <div className="footerContainer">
        <a href="#">
          <FontAwesomeIcon className="icon-fo" icon={faFacebook} />
        </a>
        <a href="#">
        <FontAwesomeIcon className="icon-fo" icon={faInstagram} />
        </a>
        <a href="#">
        <FontAwesomeIcon className="icon-fo" icon={faWhatsapp} />
        </a>
        <div className="contactoFooter">
          <p>© 2022 Copyright: Cristina Gomez</p>
          <p>Proyecto Educativo para Curso React</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
