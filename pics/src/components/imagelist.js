import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
const Imagelist = (props) => {
  const images = props.imageslist.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });
  return <div className="image-list">{images}</div>;
};

export default Imagelist;
