import React from "react";

export default function AddProduct({
  image,
  title,
  description,
  price,
  discount,
}) {
  return (
    <div className="wrap">
      <div className="addproduct">
        <img src={image} alt="" />
        <div className="padd">
          <h2>Title:{title}</h2>
          <p>Description: {description}</p>
          <p>Price:{price}</p>
          <p>Discount:{discount}</p>
        </div>
        <div className="btn">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}
