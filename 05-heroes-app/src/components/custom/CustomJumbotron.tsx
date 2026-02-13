export interface ICustomJumbotron {
  title: string;
  subtitle: string;
}
export const CustomJumbotron = ({ title, subtitle }: ICustomJumbotron) => {
  return (
    <div className="text-center">
      <h1 className="jumbotron-title">{title}</h1>

      <p className="jumbotron-subtitle">{subtitle}</p>
    </div>
  );
};
