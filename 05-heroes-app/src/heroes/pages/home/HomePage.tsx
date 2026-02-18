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

export type TStatusTab = 'all' | 'favorites' | 'heroes' | 'villains';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'all' });

  const userSelectedTab: TStatusTab = (searchParams.get('tab') as TStatusTab) ?? 'all';

  const validatedTab = useMemo(() => {
    const validTabs: TStatusTab[] = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(userSelectedTab) ? userSelectedTab : 'all';
  }, [userSelectedTab]);

  const handleClickTrigger = (value: TStatusTab) => {
    setSearchParams((prev) => {
      prev.set('tab', value);
      return prev;
    });
  };

  const { data: heroesResponse, isLoading: isLoadingHeroes } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

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
      <Tabs value={validatedTab} className="mb-8">
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
      <CustomPagination totalPages={5} />
    </>
  );
};

export default HomePage;
