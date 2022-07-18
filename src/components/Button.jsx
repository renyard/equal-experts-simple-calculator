import React from "react";

// React button component
const Button = (props) => {
  const { children, className, onClick } = props;
  return (
    <button
      className={`border-solid border-2 border-black p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
