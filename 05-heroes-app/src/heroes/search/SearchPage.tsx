import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../components/HeroStats';

const SearchPage = () => {
  return (
    <article className="page">
      <CustomJumbotron
        title="Search heroes"
        subtitle="Discover, and administer heroes and villains "
      />

      <HeroStats />
    </article>
  );
};

export default SearchPage;
