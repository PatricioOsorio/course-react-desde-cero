import type { GiphyResponse } from '../interfaces/giphy.response';
import type { IGif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async (query: string): Promise<IGif[]> => {
  try {
    const response = await giphyApi<GiphyResponse>('/search', {
      params: {
        q: query,
        limit: '10',
      },
    });

    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
