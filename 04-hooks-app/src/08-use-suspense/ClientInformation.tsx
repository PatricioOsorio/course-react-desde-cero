import { useEffect } from 'react';
import { getUserAction } from './get-user.action';

export interface IClientInformationProps {
  id: number;
}
export const ClientInformation = ({ id }: IClientInformationProps) => {
  useEffect(() => {
    getUserAction(id).then(console.log);
  }, [id]);

  return (
    <article className="flex flex-col gap-4 items-center">
      <h2>Name - #123</h2>

      <p>Otawwam Canada</p>
      <p>Rol de usuario</p>
    </article>
  );
};
