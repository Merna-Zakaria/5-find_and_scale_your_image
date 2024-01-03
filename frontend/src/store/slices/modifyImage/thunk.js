import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchImagesApi,resizeImageApi } from "../../../network/apis/modifyImageApis"

export const getSearchImages = createAsyncThunk("getSearchImages", searchImagesApi);

export const resizeImage = createAsyncThunk("resizeImage", resizeImageApi);