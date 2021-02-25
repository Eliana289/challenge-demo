import React, { Component } from "react";
import TableHeader from "./common/TableHeader";

class RestaurantsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "city", label: "City" },
    { path: "state", label: "State" },
    { key: "nopath" },
    { path: "genre", label: "Genres" },
  ];
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
    const { restaurantsInTable, sortColumn, onSort } = this.props;
    if (restaurantsInTable !== null && restaurantsInTable.length !== 0) {
      return (
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
          ></TableHeader>
          <tbody>
            {restaurantsInTable.map((restaurants) => (
              <tr key={restaurants.id}>
                <td>{restaurants.name}</td>
                <td>{restaurants.city}</td>
                <td>{restaurants.state}</td>
                <td>{restaurants.telephone}</td>
                <td>{restaurants.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <div>
          <table className="table">
            <TableHeader
              columns={this.columns}
              sortColumn={sortColumn}
              onSort={onSort}
            ></TableHeader>
          </table>
          <p className="align-items-center">Oops, No Record Found</p>
        </div>
      );
    }
  }
}

export default RestaurantsTable;
