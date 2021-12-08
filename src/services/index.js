import axios from 'axios';

const api = axios.create({
  baseURL: 'http://turma3g2commerce-env.eba-gt5mkcww.us-east-1.elasticbeanstalk.com'
  // https://dhcommerce.herokuapp.com
  // http://turma3g2commerce-env.eba-gt5mkcww.us-east-1.elasticbeanstalk.com
});

export default api;