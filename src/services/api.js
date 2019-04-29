import axios  from 'axios';

const api = axios.create({
   baseURL: 'https://omnistack-backkk.herokuapp.com',

});

export default api;