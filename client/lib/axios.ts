import axios from 'axios';

export const ENDPOINT = 'http://server/';

const instance = axios.create({
  baseURL: ENDPOINT,
});

export default instance;
