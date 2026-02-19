import { ENV } from '@/utilities/constants';
import { heroApi } from '../api/hero.api';
import type { IHeroesResponse } from '../models/get-heroes.response';

const INITIAL_PAGE = 1;
const INITIAL_LIMIT = 6;
const INITIAL_CATEGORY = 'all';

export const getHeroesByPageAction = async (
  page: number = INITIAL_PAGE,
  limit: number = INITIAL_LIMIT,
  category: string = INITIAL_CATEGORY
): Promise<IHeroesResponse> => {
  if (isNaN(page)) {
    page = INITIAL_PAGE;
  }

  if (isNaN(limit)) {
    limit = INITIAL_LIMIT;
  }

  const { data } = await heroApi.get<IHeroesResponse>('/', {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category,
    },
  });

  const heroes = data.heroes.map((h) => ({
    ...h,
    image: `${ENV.API_URL}/images/${h.image}`,
  }));

  return {
    ...data,
    heroes,
  };
};
