import { lazy, Suspense } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { Header } from '@/components/Header';

const Products = lazy(() => import('products/Products'));

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<>Some text...</>}>
        <Products />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
