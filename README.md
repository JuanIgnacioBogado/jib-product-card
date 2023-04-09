# JIB-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Juan Ignacio Bogado

## Ejemplo

```javascript
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jib-product-card';

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
```
