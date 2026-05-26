import React from "react";
import styles from "./ProductCard.module.css";

import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  onEdit,
}) {

  const navigate = useNavigate();

  return (
    <div className={styles.card}>

      <div className={styles.imageWrapper}>
        <img
          src={
            product?.image ||
            "https://via.placeholder.com/300"
          }
          alt={product?.name}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>

        <h2 className={styles.title}>
          {product?.name}
        </h2>

        <p className={styles.description}>
          {product?.description}
        </p>

        <div className={styles.footer}>

          {/* View */}

          <button
            className={styles.viewBtn}
            onClick={() =>
              navigate(`/products/${product.id}`)
            }
          >
            View
          </button>

          {/* Edit */}

          <button
            className={styles.editBtn}
            onClick={() => onEdit(product)}
          >
            Edit
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;