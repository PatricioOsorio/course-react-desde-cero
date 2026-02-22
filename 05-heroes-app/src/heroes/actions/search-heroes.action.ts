import { ENV } from '@/utilities/constants';
import { heroApi } from '../api/hero.api';
import type { IHero } from '../models/hero.interface';

export const SEARCH_PARAM_KEYS = {
  name: 'name',
  team: 'team',
  category: 'category',
  universe: 'universe',
  status: 'status',
  strength: 'strength',
} as const;

// export type TSearchParamKey = (typeof SEARCH_PARAM_KEYS)[keyof typeof SEARCH_PARAM_KEYS];

export interface ISearchHeroesParams {
  [SEARCH_PARAM_KEYS.name]?: string;
  [SEARCH_PARAM_KEYS.team]?: string;
  [SEARCH_PARAM_KEYS.category]?: string;
  [SEARCH_PARAM_KEYS.universe]?: string;
  [SEARCH_PARAM_KEYS.status]?: string;
  [SEARCH_PARAM_KEYS.strength]?: string;
}

export const searchHeroesAction = async (options: ISearchHeroesParams): Promise<IHero[]> => {
  if (!options) return [];

  const { data } = await heroApi.get<IHero[]>('/search', {
    params: options,
  });

  const heroes = data.map((h) => ({
    ...h,
    image: `${ENV.API_URL}/images/${h.image}`,
  }));

  return heroes;
};
