export interface IMySubTitleProps {
  subTitle: string;
}
export const MySubTitle = ({ subTitle }: IMySubTitleProps) => {
  console.log('MySubTitle - render');
  return (
    <>
      <h6>{subTitle}</h6>
      <button className="btn-warning">Llamar a funcion</button>
    </>
  );
};
