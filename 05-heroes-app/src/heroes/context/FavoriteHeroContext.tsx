import { createContext, useCallback, useMemo, useState, type PropsWithChildren } from 'react';
import type { IHero } from '../models/hero.interface';

export interface IFavoriteHeroContext {
  favorites: IHero[];
  favoriteCount: number;

  toggleFavorite: (hero: IHero) => void;
  isFavorite: (hero: IHero) => boolean;
}

export const FavoriteHeroContext = createContext({} as IFavoriteHeroContext);

export type TFavoriteHeroProvider = PropsWithChildren;
export const FavoriteHeroProvider = ({ children }: TFavoriteHeroProvider) => {
  const [favorites, setFavorites] = useState<IHero[]>([]);

  const toggleFavorite = useCallback(
    (hero: IHero) => {
      const heroExist = favorites.find((h) => h.id === hero.id);

      if (heroExist) {
        const newFavorites = favorites.filter((h) => h.id !== hero.id);
        setFavorites(newFavorites);
        return;
      }

      setFavorites([...favorites, hero]);
    },
    [favorites]
  );

  const value = useMemo<IFavoriteHeroContext>(
    () => ({
      favorites: [],
      favoriteCount: 0,
      toggleFavorite: toggleFavorite,
      isFavorite: () => false,
    }),
    [toggleFavorite]
  );

  return <FavoriteHeroContext.Provider value={value}>{children}</FavoriteHeroContext.Provider>;
};
