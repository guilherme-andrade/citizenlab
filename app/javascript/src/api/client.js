import axios from 'axios'
import { API_URL } from 'src/config';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin': '*', Accept: 'application/json' }
})

export default instance;
