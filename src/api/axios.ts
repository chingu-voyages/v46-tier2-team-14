import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.API_KEY,
    "X-RapidAPI-Host": import.meta.env.API_HOST,
  },
});

export default axios;
