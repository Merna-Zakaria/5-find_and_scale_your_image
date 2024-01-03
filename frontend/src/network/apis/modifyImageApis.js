import {unsplashApi, backEndApi} from "../index"

export const searchImagesApi = async (payload) => {
   return await unsplashApi.get('/search/photos',{
      params : {query : payload.query},
     
   });
 };

 export const resizeImageApi = async (payload) => {
   return await backEndApi.get('/images/resize',{
      params : payload,
     
   });
 };

