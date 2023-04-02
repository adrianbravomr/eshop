import "../styles/Footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-disclaimer">
        <div className="bold">Disclaimer:</div><div>This is not a real ecommerce, and purchases are not available in this website.</div>
      </div>
      <div className="footer-contact">
        <a href="https://github.com/adrianbravomr">
          Created by Adrián Bravo
        </a>
        <FontAwesomeIcon icon={faGithub}/>
        <a href="mailto:adrianbravomr@gmail.com">adrianbravomr@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer