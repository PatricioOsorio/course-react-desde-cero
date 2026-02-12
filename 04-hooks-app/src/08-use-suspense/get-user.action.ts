export interface IUser {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number): Promise<IUser> => {
  await new Promise((r) => setTimeout(r, 2000));

  return {
    id,
    name: 'Pato',
    location: 'CDMX',
    role: 'worker',
  };
};