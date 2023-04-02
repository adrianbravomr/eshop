import React from "react";

import "../styles/ReviewViewer.css"

import ReviewsPreview from "./ReviewsPreview";

const ReviewViewer = ({comment}) => {
  return (
    <div className="comment-cont">
      <div className="comment-name">{comment.name}</div>
      <div className="comment-date">{comment.date}</div>
      <ReviewsPreview 
        product={
          {
            reviews:{
              value:comment.value,
              count:1,
            }
          }
        }
      />
      <div className="comment-text">{comment.text}</div>
    </div>
  )
}

export default ReviewViewer