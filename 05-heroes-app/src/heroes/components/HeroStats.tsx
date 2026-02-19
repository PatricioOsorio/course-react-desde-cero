import { Heart, Users, Zap, Trophy } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { HeroStatCard } from './HeroStatCard';
import { useHeroSummary } from '@/hooks/useHeroSummary';

export const HeroStats = () => {
  const { data: summary, isLoading } = useHeroSummary();

  if (isLoading) return 'loading hero stats...';

  if (!summary) return 'no data found';

  const { heroCount, villainCount, smartestHero, strongestHero, totalHeroes } = summary;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard title="Favorites" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroStatCard>

      <HeroStatCard title="Strength" icon={<Zap className="h-4 w-4 text-muted-foreground" />}>
        <div className="text-lg font-bold">{strongestHero.name}</div>
        <p className="text-xs text-muted-foreground">Strength: {strongestHero.strength}/10</p>
      </HeroStatCard>

      <HeroStatCard
        title="Intelligence"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{smartestHero.name}</div>
        <p className="text-xs text-muted-foreground">
          Intelligence: {smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  );
};
