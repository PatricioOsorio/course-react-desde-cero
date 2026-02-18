import { ENV } from '@/utilities/constants';
import { heroApi } from '../api/hero.api';
import type { IHeroesResponse } from '../models/get-heroes.response';

export const getHeroesByPageAction = async (): Promise<IHeroesResponse> => {
  const { data } = await heroApi.get<IHeroesResponse>('/');

  const heroes = data.heroes.map((h) => ({
    ...h,
    image: `${ENV.API_URL}/images/${h.image}`,
  }));

  return {
    ...data,
    heroes,
  };
};
