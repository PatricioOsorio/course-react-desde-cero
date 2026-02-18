import { useParams } from 'react-router';

const HeroPage = () => {
  const { idSlug = '' } = useParams();

  console.log({ idSlug });

  return (
    <article className="page">
      <h1>HeroPage</h1>
    </article>
  );
};

export default HeroPage;
