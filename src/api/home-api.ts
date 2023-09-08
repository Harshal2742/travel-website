import axios from "axios"

type GetApiDataType = {
  method?: string,
  url: string,
  data?: string
}

const BASE_URL = import.meta.env.BASE_URL;

function getApiData<Type>({ url, method, data }: GetApiDataType): Promise<Type> {

  return axios({ baseURL: BASE_URL, url: url, data: data, method: method }).then((result) => {
    return result.data;
  }).catch((error) => {
    console.log(error)
    throw error;
  })
}