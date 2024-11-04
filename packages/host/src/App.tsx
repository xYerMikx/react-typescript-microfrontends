import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { router } from '@/constants/routes';

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
