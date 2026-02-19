import { getSummaryAction } from '@/heroes/actions/get-summary.action';
import { useQuery } from '@tanstack/react-query';

export const useHeroSummary = () => {
  const queryResult = useQuery({
    queryKey: ['summary-information'],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return queryResult;
};
