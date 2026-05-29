import React, { useState } from "react";
import styles from "./ReusableForm.module.css";

function ReusableForm({
  fields,
  formData,
  handleChange,
  handleSubmit,
  buttonText,
  title,
  onClose,
}

)
{
  const [isDropdownOpen, setIsDropdownOpen ] =useState(false)
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}

        <div className={styles.header}>
          <h2>{title}</h2>

          <button type="button" className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
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

               {field.type === "select" ? (
  <>
   <div className={styles.dropdown}>
  <div
    className={styles.dropdownHeader}
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    {formData.product || "Select Product"}
    <span>▼</span>
  </div>

  {isDropdownOpen && (
    <div className={styles.dropdownMenu}>
      {field.options?.map((option) => (
        <div
          key={option.value}
          className={styles.dropdownItem}
          onClick={() => {
            handleChange({
              target: {
                name: field.name,
                value: option.value,
              },
            });

            setIsDropdownOpen(false);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  )}
</div>
  </>
) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={styles.input}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Footer Buttons */}

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
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
