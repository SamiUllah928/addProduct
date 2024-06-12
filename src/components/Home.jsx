import React, { useState } from "react";
import AddProduct from "./AddProduct";

export default function Home() {
  const initialState = {
    title: "",
    description: "",
    price: "",
    discount: "",
    url: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [datArray, setDataArray] = useState([]);

  const handleFormData = (value, fieldName) => {
    setFormData((previousState) => {
      const update = { ...previousState };
      update[fieldName] = value;
      return update;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataArray([...datArray, formData]);
    alert("product added Successfully");
  };

  return (
    <div className="home">
      <h1>Add Product</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          required
          onChange={(e) => handleFormData(e.target.value, "title")}
        />
        <input
          type="text"
          placeholder="Enter Description"
          required
          onChange={(e) => handleFormData(e.target.value, "description")}
        />
        <input
          type="number"
          placeholder="Enter Price"
          required
          onChange={(e) => handleFormData(e.target.value, "price")}
        />
        <input
          type="number"
          placeholder="Enter Discount"
          required
          onChange={(e) => handleFormData(e.target.value, "discount")}
        />
        <input
          type="url"
          placeholder="Enter URl"
          required
          onChange={(e) => handleFormData(e.target.value, "url")}
        />
        <input type="submit" value="submit" />
      </form>

      <div className="wrap">
        {datArray.map((item, index) => (
          <div key={index}>
            <AddProduct
              title={item.title}
              description={item.description}
              price={item.price}
              discount={item.discount}
              image={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
