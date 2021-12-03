import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-52-207-210-14.compute-1.amazonaws.com:8080/produtos/categorias'
});

export default api;