import { Heart } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from '@/heroes/search/ui/SearchControls';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type TStatusTab = 'all' | 'favorites' | 'heroes' | 'villains';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TStatusTab>('all');

  const handleClickTrigger = (value: TStatusTab) => {
    setActiveTab(value);
  };

  const { data: heroesResponse, isLoading: isLoadingHeroes } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  console.log({ heroesResponse });

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
      <Tabs value={activeTab} className="mb-8">
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
