import axios from '../../libs/axios.min.js';
import { validateJsonResponse } from './responseValidator.js';

const apiClient = axios.create({
    baseURL: '', // Ahí deberían ir la URL de la API
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para manejar solicitudes
apiClient.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// Interceptor para manejar respuestas
apiClient.interceptors.response.use(response => {
    validateJsonResponse(response.data);
    return response;
}, error => {
    return Promise.reject(error);
});

export default apiClient;
