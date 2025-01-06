import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this URL based on your server setup
});

export default api;

