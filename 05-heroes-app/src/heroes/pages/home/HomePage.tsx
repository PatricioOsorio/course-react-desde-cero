import { Heart } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from '@/heroes/search/ui/SearchControls';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMemo } from 'react';
import { clamp, toInt, toTab, type TStatusTab } from '@/heroes/utils/heroUtilities';


const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'all', page: '1', limit: '6' });

  const tab = useMemo(() => toTab(searchParams.get('tab')), [searchParams]);
  const limit = useMemo(() => toInt(searchParams.get('limit'), 6), [searchParams]);
  const pageRaw = useMemo(() => toInt(searchParams.get('page'), 1), [searchParams]);

  const handleClickTrigger = (value: TStatusTab) => {
    setSearchParams((prev) => {
      prev.set('tab', value);
      return prev;
    });
  };

  const { data: heroesResponse, isLoading: isLoadingHeroes } = useQuery({
    queryKey: ['heroes', { page: pageRaw, limit: limit }],
    queryFn: () => getHeroesByPageAction(pageRaw, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

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
    <>
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
          <TabsTrigger value="all" onClick={() => handleClickTrigger('all')}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            onClick={() => handleClickTrigger('favorites')}
            className="flex items-center gap-2"
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => handleClickTrigger('heroes')}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger value="villains" onClick={() => handleClickTrigger('villains')}>
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <HeroGrid values={heroesResponse?.heroes} isLoading={isLoadingHeroes} />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination
        page={page}
        totalPages={totalPages}
        isLoading={isLoadingHeroes}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
