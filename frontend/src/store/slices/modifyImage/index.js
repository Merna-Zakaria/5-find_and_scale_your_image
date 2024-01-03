import { createSlice } from "@reduxjs/toolkit";
import { getSearchImages, resizeImage } from "./thunk";

const initialState = {
  searchResultList: [],
  isLoading: false,
  isError: false,
  imageResized: ''
};

const modifyImageSlice = createSlice({
  name: "modifyImage",
  initialState,
  reducers: {
    // addSearchImages: (state, action) => {
    //   state.searchResultList.push({ ...action.payload });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchImages.pending, (state, action) => {
     state.isLoading = true;
    })
    builder.addCase(getSearchImages.fulfilled, (state, action) => {
     state.isLoading = false;
     state.searchResultList = action.payload?.data?.results;
    })
    builder.addCase(getSearchImages.rejected, (state, action) => {
     state.isError = true;
    })


    builder.addCase(resizeImage.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(resizeImage.fulfilled, (state, action) => {
      console.log('fulfilled')
      state.isLoading = false;
      state.imageResized = action.payload?.data?.results;
     })
     builder.addCase(resizeImage.rejected, (state, action) => {
      console.log('error')
      state.isError = true;
     })
   }
});

export const {} = modifyImageSlice.actions;

export default modifyImageSlice.reducer;