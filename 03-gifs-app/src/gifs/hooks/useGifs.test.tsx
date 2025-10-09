import { describe, expect, test, vi } from 'vitest';
import { renderHookWithProviders } from '../../../tests/utils/hook-utils';
import { useGifs } from './useGifs';
import * as gifActions from '../actions/get-gifs-by-query.action';

const renderUseGifs = () => {
  const api = renderHookWithProviders(() => useGifs());

  return {
    get: api.get,

    getLoading: () => api.get().loading,
    getGifs: () => api.get().gifs,
    getPreviousTerms: () => api.get().previousTerms,

    search: (query: string) => api.doActAsync(() => api.get().handleSearch(query)),
    previousSearch: (term: string) => api.doActAsync(() => api.get().handleClickPreviousSearch(term)),
  };
};

describe('useGifs', () => {
  test('should return default values and mehtods', async () => {
    const { get, getLoading, getGifs, getPreviousTerms } = renderUseGifs();

    expect(getLoading()).toBe(false);
    expect(getGifs()).toStrictEqual([]);
    expect(getPreviousTerms()).toStrictEqual([]);
    expect(get().handleSearch).toBeDefined();
    expect(get().handleClickPreviousSearch).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { getGifs, search } = renderUseGifs();

    await search('something');

    expect(getGifs().length).toBeGreaterThanOrEqual(1);
  });

  test('should return a list of gifs when handleClickPreviousSearch clicked', async () => {
    const { getGifs, previousSearch } = renderUseGifs();

    await previousSearch('something');

    expect(getGifs().length).toBeGreaterThanOrEqual(1);
  });

  test('should return a list of gifs form cache', async () => {
    const { getGifs, previousSearch } = renderUseGifs();

    await previousSearch('something');

    expect(getGifs().length).toBeGreaterThanOrEqual(1);

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('The data was requested again'));

    await previousSearch('something');

    expect(getGifs().length).toBeGreaterThanOrEqual(1);
  });

  test('should return no more than 8 previous terms', async () => {
    const { getPreviousTerms, search } = renderUseGifs();

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    for (let index = 0; index < 8; index++) {
      await search(`something ${index + 1}`);
    }

    expect(getPreviousTerms().length).toBe(8);
  });
});
