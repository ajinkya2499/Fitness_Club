import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import ReusableForm from "../../../Common/ReusableForm/ReusableForm";

import styles from "./ProductDetails.module.css";

export default function ProductDetails() {

  const products = useSelector(
    (state) => state.product.products
  );

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    product: "",
    shortDescription: "",
  });

  const [editId,setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setOpen(false);
  };

  const handleEdit =(products)=>{

    setEditId(products.id)

    setFormData({
      name:products.name,
      product:products.product,
      shortDescription: products.description,
    })

    setOpen(true)
  }

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter name",
    },
    {
      label: "Product",
      name: "product",
      type: "text",
      placeholder: "Enter product",
    },
    {
      label: "Short Description",
      name: "shortDescription",
      type: "text",
      placeholder: "Enter short description",
      fullWidth: true,
    },
  ];

  return (
    <div className={styles.container}>

      {/* Header */}

      <div className={styles.header}>

        <h1 className={styles.heading}>
          Products
        </h1>

        <button
          className={styles.createBtn}
          onClick={() => setOpen(true)}
        >
          Create Product
        </button>

      </div>

      {/* Product Cards */}

      <div className={styles.productGrid}>
        {products.map((item) => (
          <ProductCard
  key={item.id}
  product={item}
  onEdit={handleEdit}
/>
        ))}
      </div>

      {/* Modal */}

      {open && (
        <ReusableForm
          title={editId
    ? "Edit Product"
    : "Create Product"}
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          buttonText="Create Product"
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  );
}