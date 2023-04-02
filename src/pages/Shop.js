import { useParams } from "react-router-dom";

import InventoryPreview from "../components/InventoryPreview";

import {getCategory} from "../db/categories";

import '../styles/Shop.css'

const Shop = ({
  handleModifyCart,
  handleModifyFavs,
  isInCart,
  isInFavs,
}) => {

  const params = useParams();

  const showCategoryLabel =  () => {
    if(params.category){
      let category = getCategory(params.category);
      if(category) return 'Shop '+category.label;
      else return 'Oops! This category is not found';
    }
    return undefined;
  }

  const shop = (
      <div className="shop-content">
        <h1>{showCategoryLabel() ?? 'Shop All Products'}</h1>
        <InventoryPreview
          category={params.category}
          handleModifyCart={handleModifyCart}
          handleModifyFavs={handleModifyFavs}
          isInCart={isInCart}
          isInFavs={isInFavs}
        />
      </div>
  );

  return shop;
}

export default Shop