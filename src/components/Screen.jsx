import React from "react";

const Screen = (props) => {
  const { expression, result } = props;
  console.log(expression);
  return <div className="">{result ? result : expression.join("")}</div>;
};

export default Screen;
