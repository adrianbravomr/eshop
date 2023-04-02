import ProductPreview from "../components/ProductPreview";
import { inventory } from "../db/inventory";
import { Link } from "react-router-dom";

import "../styles/Home.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv,faGamepad,faHeart,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Home = ({handleModifyCart,handleModifyFavs,isInCart,isInFavs}) => {
  const inv = [...inventory];
  const home = (
    <div className="home-content">
      <h1>Welcome Again!</h1>
      <div className="home-intro-cont">
        <div className="home-ftproducts">
          <h3>Popular Products ⭐️</h3>
          <div className="products-carousel">
          {
            inv
              .sort((a,b) => a.reviews.count - b.reviews.count)
              .slice(0,5)
              .map(product => 
              <ProductPreview
                  key={product.id} 
                  product={product}
                  handleModifyCart={handleModifyCart}
                  handleModifyFavs={handleModifyFavs}
                  isInCart={isInCart}
                  isInFavs={isInFavs}
                />
              )
          }
          </div>
        </div>
        <div className="home-blocks-cont home-1">
          <Link to={"/shop"} className="home-block">
              <div>Start Shopping!</div>
              <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to={"/cart"} className="home-block">
              <div>Check your Favs!</div>
              <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
        <div className="home-blocks-cont home-2">
          <Link to={"/shop/tv"} className="home-block">
            <div>Shop TVs</div>
            <FontAwesomeIcon icon={faTv} />
          </Link>
          <Link to={"/shop/gameconsoles"} className="home-block">
            <div>Shop Videogames</div>
            <FontAwesomeIcon icon={faGamepad}/>
          </Link>
        </div>
      </div>
    </div>
  );

  return home
}

export default Home