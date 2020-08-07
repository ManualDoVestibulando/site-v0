import axios from 'axios';

export const ENDPOINT = 'https://api.manualdovestibulando.digital/';

const instance = axios.create({
  baseURL: ENDPOINT,
});

export default instance;
