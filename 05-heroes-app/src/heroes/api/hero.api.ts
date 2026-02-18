import axios from 'axios';
import { ENV } from '@/utilities/constants';

export const heroApi = axios.create({
  baseURL: `${ENV.API_URL}/api/heroes`,
});
