import {unsplashApi} from "../index"

export const searchImagesApi = async (payload) => {
   return await unsplashApi.get('/search/photos',{
      params : {query : payload.query},
     
   });
 };