import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../components/HeroStats';
import { SearchControls } from './ui/SearchControls';

const SearchPage = () => {
  return (
    <article className="page">
      <CustomJumbotron
        title="Search heroes"
        subtitle="Discover, and administer heroes and villains "
      />

      <HeroStats />

      <SearchControls />
    </article>
  );
};

export default SearchPage;
