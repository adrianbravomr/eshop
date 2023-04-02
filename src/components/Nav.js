import { Link } from "react-router-dom";

import { getItemsCount } from "../utils/cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "../styles/Nav.css"

const Nav = ({cart}) => {

  const nav = (
    <nav className="nav-menu">
      <Link to="/" className="nav-logo">IBUY</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart" className="cart-button">
        <div className="cart-button-count"><div>{getItemsCount(cart)}</div></div>
        <FontAwesomeIcon className="cart-button-icon" icon={faCartShopping}/>
      </Link>
    </nav>
  )

  return nav;
}

export default Nav