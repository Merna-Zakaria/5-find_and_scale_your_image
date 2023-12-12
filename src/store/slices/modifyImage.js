import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResultList: [],
};

const modifyImageSlice = createSlice({
  name: "modifyImage",
  initialState,
  reducers: {
    getSearchImages: (state, action) => {
      state.searchResultList.push({ id: Date.now(), text: action.payload });
    },
  },
});

export const { getSearchImages } = modifyImageSlice.actions;

export default modifyImageSlice.reducer;