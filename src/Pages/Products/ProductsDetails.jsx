// src/pages/ProductDetails.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

export default function ProductDetails() {
  const products = useSelector((state) => state.product.products);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
