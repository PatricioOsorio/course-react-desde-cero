import { Outlet, useNavigation } from 'react-router';
import { Loading } from '@shared/components/Loading';

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <Loading />}
      <Outlet />
    </>
  );
}
