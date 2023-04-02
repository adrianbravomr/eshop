import React, { useState } from "react";

import ReviewViewer from "./ReviewViewer";

import { faCommentDots as faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/ReviewCommentsViewer.css"

const ReviewCommentsViewer = ({product}) => {

  const [visible,setVisible] = useState(false);

  return (
    <div className="product-reviews-cont">
      <h3 className={`reviews-toggle ${visible ? '' : 'not-shown'}`} onClick={()=>{setVisible(!visible)}} ><FontAwesomeIcon icon={faComment}/>{visible ? ` Reviews` : ` Show Reviews`}{` (${product.reviews.comments.length})`}</h3>
      {
        visible
        ? 
          <div className="product-reviews-list">
            {
              product.reviews.comments.length
              ? product.reviews.comments.map((comment,index) => <ReviewViewer key={index} comment={comment} />)
              : 'Nothing to show you 🙁'
            }
          </div>
        : ''
      }
    </div>
  )
}

export default ReviewCommentsViewer