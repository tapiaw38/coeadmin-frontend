import axios from "axios";

const coeadminApi = axios.create({
    baseURL: "https://agrapi.com.ar/api"
    //baseURL: "http://localhost:8000/api"
})

coeadminApi.interceptors.request.use( (config) => {
    config.headers = {
        authorization: `Token ${localStorage.getItem('access_token')}`
    }

    return config
})


export default coeadminApi
