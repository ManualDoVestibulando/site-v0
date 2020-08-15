import axios from 'axios';

export const ENDPOINT = 'https://api.manualdovestibulando.com.br/';

const instance = axios.create({
  baseURL: ENDPOINT,
});

export default instance;
