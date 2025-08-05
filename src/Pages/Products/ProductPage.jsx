import React from 'react'
import products from './Products';
import ProductCard from './ProductCard';

function ProductPage() {
    
  return (
    <div>
      <h1>Product</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((itom)=>{
          return(
            <div key={itom.id}>
                <ProductCard item={itom}  />
            </div>)

    })}
        </div>
    </div>
  )
}

export default ProductPage
