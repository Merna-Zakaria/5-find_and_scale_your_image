import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchImagesApi } from "../../../network/apis/modifyImageApis"

export const getSearchImages = createAsyncThunk("getSearchImages", searchImagesApi);