import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { useQuery } from '@tanstack/react-query';
import { SEARCH_PARAM_KEYS, searchHeroesAction } from '../actions/search-heroes.action';
import { getStringValue } from '../utils/heroUtilities';
import { useSearchParams } from 'react-router';
import { HeroGrid } from '../components/HeroGrid';

const SearchPage = () => {
  const [searchParams] = useSearchParams({ [SEARCH_PARAM_KEYS.name]: '' });

  const name = getStringValue(searchParams.get(SEARCH_PARAM_KEYS.name), '');

  const { data: heroes, isLoading: isLoadingHeroes } = useQuery({
    queryKey: ['search-hero', { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!name,
  });

  return (
    <article className="page">
      <CustomBreadcrumbs />

      <CustomJumbotron
        title="Search heroes"
        subtitle="Discover, and administer heroes and villains "
      />

      <HeroStats />

      <SearchControls />

      <HeroGrid values={heroes} isLoading={isLoadingHeroes} />
    </article>
  );
};

export default SearchPage;
