import { useState } from 'react';
import { Title } from './ui/Title';
import { SubTitle } from './ui/SubTitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('title :D');
  const [subTitle, setSubTitle] = useState('subtitle');

  const handleClickTitle = () => {
    setTitle(`title changed ${new Date().getTime()}`);
  };

  const handleClickSubTitle = () => {
    setSubTitle(`subtitle changed ${new Date().getTime()}`);
  };

  return (
    <article className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl">Memo app</h1>

      <Title title={title} />
      <SubTitle subTitle={subTitle} />

      <button onClick={handleClickTitle}>Cambiar titulo</button>
      <button onClick={handleClickSubTitle}>Cambiar subtitle</button>
    </article>
  );
};
