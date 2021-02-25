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

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path || column.key) {
      return null;
    }
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return null;
  };

  render() {
    return (
      <thead>
        <tr key="1">
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.preSort(column.path)}
            >
              {column.label || column.key}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
