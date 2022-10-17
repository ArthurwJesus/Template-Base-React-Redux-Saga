import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api"

const axiosApi = axios.create({
    baseURL: API_URL,
  })
  
  export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
  }
  
  export async function post(url, data, config = {}) {
    return await axiosApi
      .post(url, { ...data }, { ...config })
      .then(response => response.data)
  }
  
  export async function put(url, data, config = {}) {
    return await axiosApi
      .put(url, { ...data }, { ...config })
      .then(response => response.data)
  }
  
  export async function del(url, config = {}) {
    return await axiosApi
      .delete(url, { ...config })
      .then(response => response.data)
  }