import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const configJson: AxiosRequestConfig = {
    baseURL: process.env.API_URL,
    headers: {
        "Content-type": "application/json"
    }
};

export const api: AxiosInstance = axios.create(configJson);

api.interceptors.response.use(undefined, err => {
    const error = err.response;

    // if (error.data.code === 'token_not_valid') {
    //     console.log('token espirou'); 
    //     localStorage.clear();
    //     window.location.reload();
    //     return;
    // }

    return error;
});