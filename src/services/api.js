import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-v8wz.onrender.com"
});