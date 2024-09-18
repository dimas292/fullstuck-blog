import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <p className="logo">Ruang Ekspresi
      </p>
      <p className="menu-item">
        <span>
          <img
            src="https://img.icons8.com/?size=100&id=8119&format=png&color=#6A9C89"
            alt="menu-items"
          />
        </span>
      </p>
    </div>
  );
};

export default Header;
