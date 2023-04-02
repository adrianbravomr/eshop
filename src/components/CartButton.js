import React,{useState} from "react";

import "../styles/CartButton.css"

const CartButton = ({product,handleModifyCart,isInCart}) => {

  const [qty,setQty] = useState(isInCart(product));
  const [added,setAdded] = useState(Boolean(qty));

  const handleQtyChange = (e, newQty) => {
    e.preventDefault();
    if(newQty === 0){
      setAdded(false);
      setQty(1);
    } else {
      setAdded(true);
      setQty(newQty)
    };
    handleModifyCart(product,newQty);
  }

  const AddToCartButton = () => {
    return (
      <button onClick={ e => handleQtyChange(e, 1) }>Add to Cart</button>  
    )
  }

  const QtyButtons = () => {
    return (
      <div className="cart-item-qty">
        <button onClick={(e) => handleQtyChange(e, qty - 1)} >−</button>
        <div>{qty}</div>
        <button onClick={(e) => handleQtyChange(e, qty + 1)}>+</button>
      </div>
    )
  }

  return (
    <form className="product-tile-cart">
      {
        added 
        ? <QtyButtons/>
        : <AddToCartButton/>
      }
    </form>
  )
}

export default CartButton