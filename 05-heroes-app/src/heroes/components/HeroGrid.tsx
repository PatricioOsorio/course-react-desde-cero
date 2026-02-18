import { HeroGridCard } from './HeroGridCard';
import type { IHero } from '../models/hero.interface';

export interface IHeroGridProps {
  values?: IHero[];
  isLoading?: boolean;
}

export const HeroGrid = ({ values, isLoading }: IHeroGridProps) => {
  if (isLoading) return 'loading data...';

  if (!values) return 'not data found';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {values.map((hero) => (
        <HeroGridCard key={hero.id} value={hero} />
      ))}
    </div>
  );
};
