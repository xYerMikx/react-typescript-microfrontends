import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import CartMock from '@/mocks/CartMock';
import { About } from '@/pages/About';
import { Favorites } from '@/pages/Favorites';

const Products = lazy(() => import('products/Products'));
// const Cart = lazy(() => import('cart/Cart'));

// const Cart = lazy(
//   () =>
// process.env.NODE_ENV === 'test' // можно сделать так
//   ? Promise.resolve({
//       default: () => <CartMock />, // это из-за того что lazy так работает, возвращая default: ComponentType
//     })
//   : import('cart/Cart');
// );
const Cart = lazy(() =>
  Promise.resolve({
    default: () => <CartMock />,
  }),
);

export enum RoutePaths {
  HOME = '/',
  CART = '/cart',
  ABOUT = '/about',
  FAVORITES = '/favorites',
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RoutePaths.HOME,
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: RoutePaths.CART,
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: RoutePaths.ABOUT,
        element: <About />,
      },
      {
        path: RoutePaths.FAVORITES,
        element: <Favorites />,
      },
    ],
  },
]);
