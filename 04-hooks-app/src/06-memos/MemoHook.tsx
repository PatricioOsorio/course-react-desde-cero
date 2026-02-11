import React, { useState } from 'react';
import { MyTitle } from './ui/Mytitle';
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('title :D');
  const [subTitle, setSubTitle] = useState('subtitle');

  return (
    <article className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl">Memo app</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} />
      <button>Cambiar titulo</button>
      <button>Cambiar subtitle</button>
    </article>
  );
};
