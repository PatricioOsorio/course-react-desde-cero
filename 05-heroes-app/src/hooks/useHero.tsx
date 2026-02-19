import { getHeroAction } from '@/heroes/actions/get-hero.action';
import { useQuery } from '@tanstack/react-query';

export const useHero = (idSlug: string) => {
  const queryResult = useQuery({
    queryKey: ['hero', { idSlug }],
    queryFn: () => getHeroAction(idSlug),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return queryResult;
};
