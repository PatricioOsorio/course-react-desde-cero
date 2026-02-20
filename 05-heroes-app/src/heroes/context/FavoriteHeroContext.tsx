import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import type { IHero } from '../models/hero.interface';

export interface IFavoriteHeroContext {
  favorites: IHero[];
  favoriteCount: number;

  toggleFavorite: (hero: IHero) => void;
  checkIfFavorite: (hero: IHero) => boolean;
}

export const FavoriteHeroContext = createContext<IFavoriteHeroContext | undefined>(undefined);

export const useFavoriteHero = () => {
  const ctx = useContext(FavoriteHeroContext);
  if (!ctx) throw new Error('useFavoriteHero must be used within <FavoriteHeroProvider />');
  return ctx;
};

export type TFavoriteHeroProvider = PropsWithChildren;

// TODO: ADD ZOD
const getFavoritesFromLocalStorage = (): IHero[] => {
  const favorites = localStorage.getItem('favorites');

  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: TFavoriteHeroProvider) => {
  const [favorites, setFavorites] = useState<IHero[]>(getFavoritesFromLocalStorage());

  const toggleFavorite = useCallback((hero: IHero) => {
    setFavorites((prev) => {
      const exists = prev.some((h) => h.id === hero.id);
      return exists ? prev.filter((h) => h.id !== hero.id) : [...prev, hero];
    });
  }, []);

  const checkIfFavorite = useCallback(
    (hero: IHero): boolean => {
      return favorites.some((h) => h.id === hero.id);
    },
    [favorites]
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const value = useMemo<IFavoriteHeroContext>(
    () => ({
      favorites,
      favoriteCount: favorites.length,
      toggleFavorite,
      checkIfFavorite,
    }),
    [favorites, toggleFavorite, checkIfFavorite]
  );

  return <FavoriteHeroContext.Provider value={value}>{children}</FavoriteHeroContext.Provider>;
};
