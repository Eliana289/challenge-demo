import React, { Component } from "react";

const Selector = (props) => {
  const { items } = props;
  return (
    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Choose...</option>
      {items.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default Selector;
