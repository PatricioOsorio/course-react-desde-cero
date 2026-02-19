import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { useQuery } from '@tanstack/react-query';

export interface IUserPaginatedHeroProps {
  page: number;
  limit: number;
  category: string;
}

export const usePaginatedHero = ({ page, limit, category }: IUserPaginatedHeroProps) => {
  const queryResult = useQuery({
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () => getHeroesByPageAction(page, limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return queryResult;
};
