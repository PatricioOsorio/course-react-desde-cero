import axios from 'axios';
import { ENV } from '../../config/env';

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: ENV.GIPHY_API_KEY,
  },
});
