import React from "react";
const CurrencyFormatter = ({ balance }) => {
  return (
    <span>
      <small>£</small>{ (balance / 100 ).toFixed(2) }
    </span>
  );
};

export default CurrencyFormatter;
