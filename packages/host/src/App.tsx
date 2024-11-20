import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { router } from '@/constants/routes';
import CartMock from '@/mocks/CartMock';

// if (window.Cypress) {
//   // Для тестов подменяем Cart
// тут крч я сначала хотел сделать только в сайпрессе, а потом решил не мучаться, по итогу нужно проверять на NODE_ENV и тогда перекидывать логику модуля в window
// }

// if (process.env.NODE_ENV === 'test') {
// сюда по-хорошему код ниже, но NODE_ENV у меня нет
//}
window.CartModule = {
  get: () => {
    return () => {
      const MockedCart = () => <CartMock />;
      return MockedCart;
    };
  },
  init: () => Promise.resolve(),
};

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
