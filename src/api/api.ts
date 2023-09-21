import axios, { AxiosHeaders, AxiosRequestHeaders, RawAxiosResponseHeaders } from "axios"
import { ApiResult, CurrentUser, PasswordUpdate, SignInApiData, Tour } from "./api.interface";
import { TopTours } from "./api.type";

type GetApiDataType = {
  method?: string,
  url: string,
  data?: string | FormData;
  headers?: AxiosRequestHeaders | AxiosHeaders | RawAxiosResponseHeaders
  withCredentials?: boolean
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

function getApiData<Type>({ url, method, data, headers, withCredentials }: GetApiDataType): Promise<Type> {

  return axios({ baseURL: BASE_URL, url: url, data: data, method: method, headers: headers, withCredentials: withCredentials }).then((result) => {
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

// API call to get all tours
export const getAllTours = async () => {
  const result = await getApiData<ApiResult<Tour[]>>({
    url: "/tours/"
  })

  return result;
}

// API call to get tour with ID
export const getTour = async (tourId: string) => {
  const result = await getApiData<ApiResult<Tour>>({
    url: `/tours/${tourId}`
  })

  return result;
}

// API call to signin
export const signIn = async (data: SignInApiData) => {
  const result = await getApiData<ApiResult<CurrentUser>>({
    url: '/users/signin',
    data: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
  return result
}

// API call to get current user data
export const getCurrentUser = async () => {

  const result = await getApiData<ApiResult<CurrentUser>>({
    url: "users/me",
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("travel-token")}`
    }
  })
  return result
}

// API call to update account settings
export const updateAccountSettings = async (formData: FormData) => {
  const result = await getApiData<ApiResult<CurrentUser>>({
    url: "users/updateMe",
    withCredentials: true,
    data: formData,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("travel-token")}`,
      'Content-Type': 'multipart/form-data'
    },
    method: "PATCH"
  })

  return result
}

export const updatePassword = async (data: PasswordUpdate) => {

  const result = await getApiData<ApiResult<CurrentUser>>({
    url: "users/updateMyPassword",
    withCredentials: true,
    data: JSON.stringify(data),
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("travel-token")}`,
      "Content-Type": "application/json",
    },
    method: "PATCH"
  })

  return result
}

export const logout = async () => {

  const result = await getApiData<ApiResult<null>>({
    url: "users/logout",
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("travel-token")}`,
    }
  })

  return result
}

export const getMyTours = async () => {
  const result = await getApiData<ApiResult<Tour[]>>({
    url: 'bookings/my-tours',
    withCredentials: true,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("travel-token")}`,
    }
  })

  return result
}

