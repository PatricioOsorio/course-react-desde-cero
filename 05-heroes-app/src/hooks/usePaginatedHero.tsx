import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { useQuery } from '@tanstack/react-query';

export interface IUserPaginatedHeroProps {
  page: number;
  limit: number;
}

export const usePaginatedHero = ({ page, limit }: IUserPaginatedHeroProps) => {
  const queryResult = useQuery({
    queryKey: ['heroes', { page, limit: limit }],
    queryFn: () => getHeroesByPageAction(page, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return queryResult;
};
