import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ image }) => {
  console.log("image", image);
  const navigate = useNavigate();
  return (
    image && (
      <div className="col-12 col-md-4 mb-4">
        <div className="card">
          <img
            alt={image?.alt_description}
            key={image?.id}
            src={image?.urls?.regular}
            height={270}
          />
          <p className="text-center p-2">{image?.alt_description}</p>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() =>
              navigate("/scale_img", {
                state: { imgUrl: image?.urls?.regular },
              })
            }
          >
            Scall Image
          </button>
        </div>
      </div>
    )
  );
};

export default ImageCard;
