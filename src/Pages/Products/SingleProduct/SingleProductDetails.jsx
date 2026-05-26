import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./SingleProductDetails.module.css";

function SingleProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

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

      <div className={styles.card}>

        {/* Close Button */}

        <button
          className={styles.closeBtn}
          onClick={() => navigate("/products")}
        >
          ✕
        </button>

        {/* Left Image */}

        <div className={styles.imageSection}>
          <img
            src={
              singleProduct?.image ||
              "https://via.placeholder.com/500"
            }
            alt={singleProduct?.name}
            className={styles.image}
          />
        </div>

        {/* Right Content */}

        <div className={styles.content}>

          <p className={styles.category}>
            FITNESS PRODUCT
          </p>

          <h1 className={styles.title}>
            {singleProduct?.name}
          </h1>

          <p className={styles.description}>
            {singleProduct?.description}
          </p>

          <h2 className={styles.price}>
            ₹ 2500
          </h2>

          {/* Buttons */}

          <div className={styles.actions}>

            <button className={styles.buyBtn}>
              Buy Now
            </button>

            <button className={styles.cartBtn}>
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SingleProductDetails;