import React, { Component } from "react";

class TableHeader extends Component {
  preSort = (path) => {
    console.log(path);
    const tempColumn = { ...this.props.sortColumn };
    if (tempColumn.path === path) {
      tempColumn.order = tempColumn.order === "asc" ? "desc" : "asc";
    } else {
      tempColumn.path = path;
      tempColumn.oder = "asc";
    }
    this.props.onSort(tempColumn);
  };
  render() {
    return (
      <thead>
        <tr key="1">
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.preSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
