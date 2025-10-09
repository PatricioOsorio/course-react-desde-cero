import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';
import './SearchBar.scss';
import classNames from 'classnames';

export interface ISearchBarProps extends ComponentPropsWithoutRef<'section'> {
  inputProps?: ComponentPropsWithoutRef<'input'>;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ inputProps, onQuery, ...props }: ISearchBarProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    if (!query) return;
    onQuery(query);
    setQuery('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section {...props} className={classNames(props.className, 'search-bar-container', 'search-container')}>
      <input
        type="text"
        name="searcher"
        id="searcher"
        placeholder="Buscar gifs"
        {...inputProps}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </section>
  );
};
