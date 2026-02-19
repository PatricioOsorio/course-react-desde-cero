import { ENV } from '@/utilities/constants';
import { heroApi } from '../api/hero.api';
import type { IHero } from '../models/hero.interface';

export const getHeroAction = async (idSlug: string): Promise<IHero> => {
  const { data } = await heroApi.get<IHero>(`/${idSlug}`);

  return {
    ...data,
    image: `${ENV.API_URL}/images/${data.image}`,
  };
};
