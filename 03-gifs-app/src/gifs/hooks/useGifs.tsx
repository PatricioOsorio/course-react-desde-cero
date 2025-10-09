import { useRef, useState } from 'react';
import type { IGif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

// const gifsCache: Record<string, IGif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const gifsCache = useRef<Record<string, IGif[]>>({});

  const handleClickPreviousSearch = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifsData = await getGifsByQuery(term);
    setGifs(gifsData);

    gifsCache.current[term] = gifsData;
  };

  const handleSearch = async (query: string) => {
    const term = query.trim().toLowerCase();

    if (!term) return;
    if (previousTerms.includes(term)) return;

    setPreviousTerms((prev) => [term, ...prev].splice(0, 8));

    setLoading(true);
    const gifsData = await getGifsByQuery(query);
    setGifs(gifsData);

    gifsCache.current[term] = gifsData;

    setLoading(false);
  };

  return {
    // states
    gifs,
    loading,
    previousTerms,

    // handlers
    handleSearch,
    handleClickPreviousSearch,
  };
};
