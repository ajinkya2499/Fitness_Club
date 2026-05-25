import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './SingleProductDetails.module.css';

function SingleProductDetails() {

  const { id } = useParams();

  const products = useSelector(
    (state) => state.product.products
  );

  const singleProduct = products.find(
    (item) => item.id == id
  );

  if (!singleProduct) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className={styles.container}>

      <img
        src={singleProduct.image}
        alt={singleProduct.title}
        className={styles.image}
      />

      <h1 className={styles.title}>
        {singleProduct.title}
      </h1>

      <h2 className={styles.price}>
        ₹ {singleProduct.price}
      </h2>

      <h3 className={styles.category}>
        {singleProduct.category}
      </h3>

      <p className={styles.description}>
        {singleProduct.description}
      </p>

    </div>
  );
}

export default SingleProductDetails;