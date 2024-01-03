import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from'react-redux';
import { resizeImage } from "../../store/slices/modifyImage/thunk"

const ScaleImage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { imgUrl } = state;

  console.log("imgUrl", imgUrl);
  return (
    <div>
      <div className="scaleWrapper p-5">
        <h2 className="mb-3">Enter Your Dimensions</h2>
        <div class="input-group">
          <input
            type="number"
            aria-label="First name"
            placeholder="Enter Width"
            class="form-control"
          />
          <input
            type="number"
            aria-label="Last name"
            placeholder="Enter Height"
            class="form-control"
          />
          <span class="input-group-text" onClick={() => {
              dispatch(resizeImage({ imgUrl, width:100, height:100 }));
          }}>Scale image</span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <img src={imgUrl} alt="" height={400} width={400}/>
      </div>
    </div>
  );
};

export default ScaleImage;
