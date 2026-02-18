import type { IHero } from './hero.interface';

export interface IHeroesResponse {
  total: number;
  pages: number;
  heroes: IHero[];
}
