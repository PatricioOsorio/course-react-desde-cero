import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';
import { ENV } from '../../config/env';

const renderGiphyApi = () => {
  return {
    getBaseUrl: () => giphyApi.defaults.baseURL,
    getParams: () => giphyApi.defaults.params,
  };
};

describe('giphy.api', () => {
  test('should be configured correctly', () => {
    const { getBaseUrl, getParams } = renderGiphyApi();

    expect(getBaseUrl()).toBeDefined();
    expect(getParams()).toBeDefined();
    
    expect(getParams()).toStrictEqual({
      lang: 'es',
      api_key: ENV.GIPHY_API_KEY,
    });
  });
});
