import { type IUser } from './get-user.action';
import { use, type Usable } from 'react';

interface IClientInformationProps {
  getUser: Usable<IUser>;
}

export const ClientInformation = ({ getUser }: IClientInformationProps) => {
  const user = use(getUser);

  return (
    <article className="flex flex-col gap-4 items-center">
      <h2>
        {user.name} - #{user.id}
      </h2>

      <p>{user.location}</p>
      <p>{user.role}</p>
    </article>
  );
};
