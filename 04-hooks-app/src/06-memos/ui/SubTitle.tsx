import { memo } from 'react';

export interface ISubTitleProps {
  subTitle: string;
}
const SubTitleBase = ({ subTitle }: ISubTitleProps) => {
  console.log('SubTitle - render');
  return (
    <>
      <h6>{subTitle}</h6>
      <button className="btn-warning">Llamar a funcion</button>
    </>
  );
};

export const SubTitle = memo(SubTitleBase);
