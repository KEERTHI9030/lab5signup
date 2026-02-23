import React from "react";
import "../App.css";

const Authcontainer = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
};

export default Authcontainer;