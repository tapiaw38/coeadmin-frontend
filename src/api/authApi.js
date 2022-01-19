import axios from "axios";

const authApi = axios.create({
    baseURL: "https://agrapi.com.ar/api"
    //baseURL: "http://localhost:8000/api"
});

export default authApi;