import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
};

const App = () => (
  <>
    <ProductCard
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
      product={product}
    >
      {({ isMaxCountReached, counter, maxCount, increaseBy, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  </>
);

render(<App />, document.getElementById('root'));
