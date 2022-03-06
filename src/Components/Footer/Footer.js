
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import './Footer.css';
function Footer() {
    return (
      <div className="footerContainer">
        <div>
            <FontAwesomeIcon className="icon-fo" icon={faFacebook} />
          <a>
          </a>
          <a>
            <FontAwesomeIcon className="icon-fo" icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-fo" icon={faWhatsapp} />
          </a>
        </div>
      </div>
    );
};

export default Footer;
