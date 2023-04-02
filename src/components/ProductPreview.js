import React from "react";
import { Link } from "react-router-dom";

import CartButton from "./CartButton";
import FavButton from "./FavButton";
import ReviewsPreview from "./ReviewsPreview";

import '../styles/ProductPreview.css'

const ProductPreview = ({
  product,
  handleModifyCart,
  handleModifyFavs,
  isInCart,
  isInFavs,
}) => {

  const preview = (
    <div key={product.id} className="product-tile">
      <FavButton
        product={product}
        handleModifyFavs={handleModifyFavs}
        isInFavs={isInFavs}
      />
      <Link to={"/product/"+product.id} className="product-tile-img-cont">
        <img className="product-tile-img" src={product.images[0]} alt={'product image: '+product.name}/>
      </Link>
      <div className="product-tile-form">
        <Link to={"/product/"+product.id}>
          <div className="product-tile-name">{product.brand} {product.name}</div>
        </Link>
        <ReviewsPreview className='product-tile-reviews' product={product}/>
        <div className="product-tile-price">${product.price}</div>
        <CartButton
          product={product}
          handleModifyCart={handleModifyCart}
          isInCart={isInCart}
        />
      </div>
    </div>
  );
  return preview;
}

export default ProductPreview