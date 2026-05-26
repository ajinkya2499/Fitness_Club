import React, { useState } from "react";
import ReusableForm from "../../../Common/ReusableForm/ReusableForm";

function AddModule() {

  const [open, setOpen] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    product: "",
    shortDescription: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit form data ::", formData);
  };

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
    <div>

      {/* Open Button */}

      <button onClick={() => setOpen(true)}>
        Open Form
      </button>

      {/* Modal */}

      {open && (
        <ReusableForm
          title="Create Product"
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

export default AddModule;