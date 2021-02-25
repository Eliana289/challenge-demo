import React, { Component } from "react";

const Selector = (props) => {
  const { data, items, onItemSelect } = props;
  return (
    <select
      onChange={(e) => onItemSelect(e.target.value)}
      class="custom-select"
      id="inputGroupSelect01"
    >
      <option value="" selected>
        Choose...
      </option>
      {items.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Selector;
