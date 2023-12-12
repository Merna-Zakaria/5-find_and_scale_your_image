import { configureStore } from "@reduxjs/toolkit";
import modifyImageReducer from "./slices/modifyImage";

const store = configureStore({
  reducer: {
    modifyImage: modifyImageReducer,
  },
});

export default store;