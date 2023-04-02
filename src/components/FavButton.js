import React,{useState} from "react";

import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/FavButton.css"

const FavButton = ({product,handleModifyFavs,isInFavs}) => {

  const [fav,setFav] = useState(isInFavs(product));

  const handleToggleFav = () =>{
    const favToggle = handleModifyFavs(product);
    setFav(favToggle);
  }

  return (
    <FontAwesomeIcon className={`favorites-icon ${fav ? 'fav' : ''}`} onClick={()=>handleToggleFav(product)} icon={fav ? faHeartSolid : faHeart}/>
  )
}

export default FavButton