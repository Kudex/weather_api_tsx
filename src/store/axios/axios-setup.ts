import axios from "axios";
import store from "../store";

axios.defaults.baseURL = "https://air-quality.p.rapidapi.com";

axios.interceptors.request.use((request: any) => {
  const storeData = store.getState();

  if (storeData.auth.token) {
    request.headers = {
      ...request.headers,
      "X-RapidAPI-Key": storeData.auth.token,
      "X-RapidAPI-Host": storeData.auth.host,
    };
  }

  return request;
});