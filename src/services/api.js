import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lrtweb-api.herokuapp.com',
})

export default api;