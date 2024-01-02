import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../imageCard";
import { getSearchImages } from "../../store/slices/modifyImage/thunk";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const {
    modifyImage: { searchResultList },
  } = useSelector((state) => state);
  //   const searchResultList = JSON.parse(localStorage.getItem("searchResultList"));
  //   console.log("hi", query, "modifyImage", searchResultList);

  return (
    <div className="container">
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getSearchImages({ query }));
        }}
      >
        <div className="ui feild">
          <div className="d-flex justify-content-between pt-5">
            <h1>Find Your Image</h1>
            <span>{searchResultList?.length || 0} photos</span>
          </div>
          <input
            placeholder="find your image"
            className="mb-5"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </form>

      <div className="row">
        {searchResultList?.length ? (
          searchResultList?.map((img) => {
            return <ImageCard image={img} />;
          })
        ) : (
          <p className="p-5 text-center">No data found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
