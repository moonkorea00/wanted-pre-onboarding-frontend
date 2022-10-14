import axios from 'axios';
import { BASE_URL } from '../config';

const clientApi = axios.create({
  baseURL: BASE_URL,
});

export default clientApi;
