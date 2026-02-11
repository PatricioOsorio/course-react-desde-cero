export interface IMyTitleProps {
  title: string;
}
export const MyTitle = ({ title }: IMyTitleProps) => {
  console.log("MyTitle - render")
  return <h1>{title}</h1>;
};
