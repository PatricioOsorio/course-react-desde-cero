import { memo } from 'react';

export interface ITitleProps {
  title: string;
}
const TitleBase = ({ title }: ITitleProps) => {
  console.log('Title - render');
  return <h1>{title}</h1>;
};

export const Title = memo(TitleBase);
