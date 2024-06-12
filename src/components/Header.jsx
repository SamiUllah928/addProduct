import React from "react";

export default function Header({ home, about, contact, faq }) {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="links">
        <ul>
          <li>{home}</li>
          <li>{about}</li>
          <li>{contact}</li>
          <li>{faq}</li>
        </ul>
      </div>
    </div>
  );
}
