import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-rocket.herokuapp.com",
});

export default api;