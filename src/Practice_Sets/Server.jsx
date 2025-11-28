import React, { useEffect, useState } from 'react'

function Server() {
      const [product,setProduct]=useState([])

      const FetchAPIProductList =async()=>{
         const res = await fetch("https://dummyjson.com/products");
      const products = await res.json();

      console.log("product", products.products);
      setProduct(setProduct(product.products));
      }

    useEffect(()=>{FetchAPIProductList()}, []);
  return (
    <div>
   {product?.map((item)=>{
<div key={item.id}>
    <p>{item.name}</p>
</div>})}
    </div>
  )
}

export default Server
