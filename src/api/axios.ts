import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
});

export default axios;
