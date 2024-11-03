import { lazy, Suspense } from "react";

const Cart = lazy(() => import("cart/Cart"));
const Products = lazy(() => import("products/Products"));

const App = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<>Some text...</>}>
        <Cart />
      </Suspense>
      <Suspense fallback={<>Some text...</>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default App;
