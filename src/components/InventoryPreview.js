import React from "react"
import ProductPreview from "./ProductPreview"

import {inventory} from "../db/inventory";

import '../styles/InventoryPreview.css'

const InventoryPreview = ({
  category,
  handleModifyCart,
  handleModifyFavs,
  isInCart,
  isInFavs,
}) => {
  const inv = category ? [...inventory].filter(product => product.categories.includes(category)) : [...inventory];
  return(
    <div className="inventory-preview">
    {inv.map(product => 
      <ProductPreview 
        key={product.id} 
        product={product}
        handleModifyCart={handleModifyCart}
        handleModifyFavs={handleModifyFavs}
        isInCart={isInCart}
        isInFavs={isInFavs}
      />
    )}
    </div>
  )
}

export default InventoryPreview