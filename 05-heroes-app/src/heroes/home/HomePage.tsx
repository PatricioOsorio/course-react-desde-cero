import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../components/HeroStats';
import { SearchControls } from '../search/ui/SearchControls';
import { HeroGrid } from '../components/HeroGrid';
import { useState } from 'react';

export type TStatusTab = 'all' | 'favorites' | 'heroes' | 'villains';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TStatusTab>('all');

  const handleClickTrigger = (value: TStatusTab) => {
    setActiveTab(value);
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
          <HeroGrid />
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
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default HomePage;
