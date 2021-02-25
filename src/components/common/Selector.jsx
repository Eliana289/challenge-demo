import React from "react";

const Selector = (props) => {
  const { items, onItemSelect } = props;
  return (
    <select
      onChange={(e) => onItemSelect(e.target.value)}
      className="custom-select"
      id="inputGroupSelect01"
    >
      <option value="">All</option>
      {items.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Selector;
