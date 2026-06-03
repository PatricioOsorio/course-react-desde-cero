import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { Loading } from '@shared/components/Loading';

import { appRouter } from './app.router';

function App() {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const unsubscribe = appRouter.subscribe((state) => {
      setIsNavigating(state.navigation.state === 'loading');
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {isNavigating && <Loading />}
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
