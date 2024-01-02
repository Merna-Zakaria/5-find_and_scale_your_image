import { createSlice } from "@reduxjs/toolkit";
import { getSearchImages } from "./thunk";

const initialState = {
  searchResultList: [],
  isLoading: false,
  isError: false,
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
    console.log('builder', builder)
    builder.addCase(getSearchImages.pending, (state, action) => {
     state.isLoading = true;
    })
    builder.addCase(getSearchImages.fulfilled, (state, action) => {
     state.isLoading = false;
     state.searchResultList = action.payload?.data?.results;
    //  localStorage.setItem('searchResultList', JSON.stringify(action.payload?.data?.results))
    })
    builder.addCase(getSearchImages.rejected, (state, action) => {
     state.isError = true;
    })
   }
});

export const {} = modifyImageSlice.actions;

export default modifyImageSlice.reducer;