import { Heart } from 'lucide-react';
import { useSearchParams } from 'react-router';

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from '@/heroes/search/ui/SearchControls';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMemo } from 'react';
import { clamp, toCategory, toInt, toTab, type TStatusTab } from '@/heroes/utils/heroUtilities';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { useHeroSummary } from '@/hooks/useHeroSummary';
import { usePaginatedHero } from '@/hooks/usePaginatedHero';
import { useFavoriteHero } from '@/heroes/context/FavoriteHeroContext';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'all', page: '1', limit: '6' });

  const { favoriteCount, favorites } = useFavoriteHero();

  const tab = useMemo(() => toTab(searchParams.get('tab')), [searchParams]);
  const limit = useMemo(() => toInt(searchParams.get('limit'), 6), [searchParams]);
  const pageRaw = useMemo(() => toInt(searchParams.get('page'), 1), [searchParams]);
  const category = useMemo(() => toCategory(searchParams.get('category')), [searchParams]);

  const handleClickTrigger = (value: TStatusTab, category: string) => {
    setSearchParams((prev) => {
      prev.set('tab', value);
      prev.set('category', category);
      prev.set('page', '1');
      return prev;
    });
  };

  const { data: heroesResponse, isLoading: isLoadingHeroes } = usePaginatedHero({
    page: pageRaw,
    limit: limit,
    category: category,
  });

  const { data: summary } = useHeroSummary();

  const totalPages = heroesResponse?.pages ?? 0;

  const page = useMemo(() => {
    if (totalPages <= 0) return 1;
    return clamp(pageRaw, 1, totalPages);
  }, [pageRaw, totalPages]);

  const handlePageChange = (nextPage: number) => {
    if (!totalPages) return;

    const safe = clamp(Number.isFinite(nextPage) ? nextPage : 1, 1, totalPages);

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('page', String(safe));
      return next;
    });
  };

  return (
    <article className="page">
      <CustomBreadcrumbs />

      {/* Header */}
      <CustomJumbotron
        title="Superhero Universe"
        subtitle="Discover, explore, and manage your favorite superheroes and villains"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      {/* Tabs */}
      <Tabs value={tab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => handleClickTrigger('all', 'all')}>
            All Characters ({summary?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            onClick={() => handleClickTrigger('favorites', 'favorites')}
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites ({favoriteCount})
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => handleClickTrigger('heroes', 'hero')}>
            Heroes ({summary?.heroCount})
          </TabsTrigger>
          <TabsTrigger value="villains" onClick={() => handleClickTrigger('villains', 'villain')}>
            Villains ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <HeroGrid values={heroesResponse?.heroes} isLoading={isLoadingHeroes} />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid values={favorites} isLoading={false} />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid values={heroesResponse?.heroes} isLoading={isLoadingHeroes} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid values={heroesResponse?.heroes} isLoading={isLoadingHeroes} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination
        page={page}
        totalPages={totalPages}
        isLoading={isLoadingHeroes}
        onPageChange={handlePageChange}
      />
    </article>
  );
};

export default HomePage;
