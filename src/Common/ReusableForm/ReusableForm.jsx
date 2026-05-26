import React from "react";
import styles from "./ReusableForm.module.css";

function ReusableForm({
  fields,
  formData,
  handleChange,
  handleSubmit,
  buttonText,
  title,
  onClose,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>{title}</h2>

          <button type="button" className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            {fields.map((field) => (
              <div
                key={field.name}
                className={
                  field.fullWidth ? styles.fullWidth : styles.formGroup
                }
              >
                <label className={styles.label}>{field.label}</label>

                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={styles.input}
                />
              </div>
            ))}
          </div>

          {/* Footer Buttons */}

          <div className={styles.footer}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className={styles.submitBtn}>
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReusableForm;
