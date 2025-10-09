import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './shared/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const {
    // states
    gifs,
    loading,
    previousTerms,

    // handlers
    handleSearch,
    handleClickPreviousSearch,
  } = useGifs();

  if (loading) return <h1>loading response</h1>;

  return (
    <article>
      <CustomHeader title="Gifs App" description="Discover and share gifs" />
      <SearchBar inputProps={{ placeholder: 'Search anywhere' }} onQuery={handleSearch} />
      <PreviousSearches searches={previousTerms} onClickTerm={handleClickPreviousSearch} />
      <GifList gifs={gifs} />
    </article>
  );
};
