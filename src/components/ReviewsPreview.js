import React from "react";

import "../styles/ReviewsPreview.css"

const ReviewsPreview = ({product}) => {

  return (
    <div className="product-tile-reviews">
      <i data-star={product.reviews.value}></i>{product.reviews.count > 1 ?`(${product.reviews.count} reviews)`:''}
  </div>
  )

}

export default ReviewsPreview