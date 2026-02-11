import { memo } from 'react';

export interface ISubTitleProps {
  subTitle: string;
  onSomething: () => void;
}

const SubTitleBase = ({ subTitle, onSomething }: ISubTitleProps) => {
  console.log('SubTitle - render');
  return (
    <>
      <h6>{subTitle}</h6>
      <button className="btn-warning" onClick={onSomething}>Llamar a funcion</button>
    </>
  );
};

export const SubTitle = memo(SubTitleBase);
