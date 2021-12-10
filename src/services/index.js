import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dhcommerce.herokuapp.com'
  // https://dhcommerce.herokuapp.com
  // http://turma3g2commerce-env.eba-gt5mkcww.us-east-1.elasticbeanstalk.com
});

export default api;