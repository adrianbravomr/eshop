import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import FavButton from "../components/FavButton";
import CartButton from "../components/CartButton";
import ReviewsPreview from "../components/ReviewsPreview";
import ReviewCommentsViewer from "../components/ReviewCommentsViewer";

import {getProduct} from "../db/inventory";

import "../styles/Product.css"

const Product = (
  {
    handleModifyCart,
    isInCart,
    handleModifyFavs,
    isInFavs,
  }) => {

  const params = useParams();

  const product = getProduct(params.id);

  const productView = product 
    ? (
      <div className="product-view">
        <Link className="back-button" to={"/shop"}>⬅ Return</Link>
        <div className="product-cont">
          <div className="product-left">
            <div className="product-image"><img src={product.images[0]} alt={product.brand+' '+product.name}/></div>
          </div>
          <div className="product-right">
            <div className="product-categories">
              <FavButton product={product} handleModifyFavs={handleModifyFavs} isInFavs={isInFavs}/>
              {product.categories.map(category =>
                <Link key={`cat-${category}`} className="product-category" to={`/shop/${category}`}>{category}</Link>
              )}
            </div>
            <div className="product-name">{product.brand} {product.name}</div>
            <div className="product-model">Model: {product.model}</div>
            <ReviewsPreview product={product}/>
            <div className="product-price">{product.price}$</div>
            <CartButton
              product={product}
              handleModifyCart={handleModifyCart}
              isInCart={isInCart}
            />
            <div className="product-description">
              <div>{product.description}</div>
            </div>
          </div>
        </div>
        <ReviewCommentsViewer product={product}/>
      </div>
    ) 
    : <div>Ups! Not found</div>;

  return productView;
}

export default Product