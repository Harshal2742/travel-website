import axios from "axios"
import { ApiResult } from "./api.interface";
import { TopTours } from "./api.type";

type GetApiDataType = {
  method?: string,
  url: string,
  data?: string
}

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

function getApiData<Type>({ url, method, data }: GetApiDataType): Promise<Type> {

  return axios({ baseURL: BASE_URL, url: url, data: data, method: method }).then((result) => {
    return result.data;
  }).catch((error) => {

    // This will print error is regarding to the api call such as network error
    console.log(error)
    throw error;
  })
}

// API call to get top tours

export const getTopTours = async () => {

  const result = await getApiData<ApiResult<TopTours>>({
    url: "/tours/top-5-cheap"
  })



  return result;
}
