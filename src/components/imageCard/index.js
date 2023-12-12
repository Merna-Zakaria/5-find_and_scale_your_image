import React from "react";

const ImageCard = (props) => {
  console.log("hi props", props.images);

  return (
    <>
      {(props.images && props.images.length) && props.images.map((img) => (
        <img alt={img.description} key={img.id} src={img.urls.regular} />
      ))}
    </>
  );
};

export default ImageCard;
