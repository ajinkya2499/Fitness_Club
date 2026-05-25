import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductPage() {

  const products = useSelector(
    (state) => state.product.products
  );

  return (
    <div>

      <h1>All Products</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >

        {products.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductPage;