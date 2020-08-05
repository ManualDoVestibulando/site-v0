import axios from 'axios';

export const ENDPOINT = 'http://server:1337/';

const instance = axios.create({
  baseURL: ENDPOINT,
});

export default instance;
