import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";

import { getProduct } from "../db/inventory";

import { getTotal} from "../utils/cart";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Cart.css"

const Cart = ({
  cart,
  handleModifyCart,
  favs,
  handleModifyFavs,
  isInCart,
  isInFavs
}) => {

  const move = (product,origin,destination) => {
    handleModifyFavs(product);
    if(origin === 'cart' && destination === 'favs'){
      handleModifyCart(product,0);
    } else if(origin === 'favs' && destination === 'cart'){
      handleModifyCart(product,product.qty);
    }
  }

  const CartProduct = (item) => {
    const product = getProduct(item.id);
    return(
      <div key={product.id} className="cart-item">
        <div className="cart-item-fav">
          <FontAwesomeIcon className="cart-item-fav-icon" onClick={()=>{move(item,'cart','favs')}} icon={faHeart}/>
        </div>
        <div className="cart-item-img"><img src={product.images[0]} alt={product.name} /></div>
        <div className="cart-item-name"><Link to={"/product/"+product.id}>{product.brand+' '+product.name}</Link></div>
        <CartButton product={item} handleModifyCart={handleModifyCart} isInCart={isInCart} />
        <div className="cart-item-price">${product.price}</div>
        <div className="cart-item-total">${product.price * item.qty}</div>
      </div>
    )
  }

  const FavProduct = (item) => {
    const product = getProduct(item.id);
    return(
      <div key={product.id} className="fav-item">
        <div className="fav-item-cart">
          <FontAwesomeIcon className="fav-item-cart-icon" onClick={()=>{move(item,'favs','cart')}} icon={faCartShopping}/>
        </div>
        <div className="fav-item-img"><img src={product.images[0]} alt={product.name}/></div>
        <div className="fav-item-name"><Link to={"/product/"+product.id}>{product.brand+' '+product.name}</Link></div>
        <div className="fav-item-remove">
          <FontAwesomeIcon className="fav-item-cart-icon" onClick={()=>{handleModifyFavs(product)}} icon={faCircleXmark}/></div>
        <div className="fav-item-price">${product.price}</div>
      </div>
    )
  }

  const CartOverview = () => {
    return(
      <div className="cart-overview">
        <div className="cart-overview-header">
          <div className="cart-overview-header-img"></div>
          <div className="cart-overview-header-name">Product Description</div>
          <div className="cart-overview-header-qty">Qty.</div>
          <div className="cart-overview-header-price">Unit Price</div>
          <div className="cart-overview-header-total">Total</div>
        </div>
        {cart.map(item => CartProduct(item))}
        <div className="cart-total">
          <div className="cart-total-text">Cart Total</div>
          <div className="cart-total-price"> ${getTotal(cart).toFixed(2)}</div>
        </div>
        <div className="cart-pay">
          <button className="cart-pay-button">Order Now</button>
        </div>
      </div>
    )
  }

  const FavsOverview = () => {
    return (
      <div className="fav-overview">
        {favs.map(item => FavProduct(item))}
      </div>
    )
  }

  const CartEmpty = () => {
    return(
      <div className="cart-overview">
        <div className="cart-empty">
          <div>Oh no!</div>
          <div>Your Cart is empty... 😢</div>
        </div>
      </div>
    )
  }

  const cartView = (
    <div className="cart-cont">
      <h1>Your Cart</h1>
      {cart.length ? <CartOverview/> : <CartEmpty/>}
      {favs.length ? <h1>Your Favorites</h1>: ''}
      {favs.length ? <FavsOverview/> : ''}
    </div>
  );

  return cartView;
}

export default Cart