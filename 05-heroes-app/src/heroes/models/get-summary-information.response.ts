import type { IHero } from './hero.interface';

export interface ISummaryInformationResponse {
  totalHeroes: number;
  strongestHero: IHero;
  smartestHero: IHero;
  heroCount: number;
  villainCount: number;
}
