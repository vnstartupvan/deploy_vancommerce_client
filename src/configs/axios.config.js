import axios from "axios";

export const axiosClient = axios.create({
    method:'get',
    baseURL: "http:localhost:3001/",
});

