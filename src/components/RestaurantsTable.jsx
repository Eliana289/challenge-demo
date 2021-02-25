import React, { Component } from "react";

class RestaurantsTable extends Component {
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
    const { restaurantsInTable } = this.props;
    if (restaurantsInTable === null || restaurantsInTable.length === 0) {
      return (
        <div>
          <table className="table">
            <thead>
              <tr key="1">
                <th key="name" onClick={() => this.preSort("name")}>
                  Name
                </th>
                <th key="city" onClick={() => this.preSort("city")}>
                  City
                </th>
                <th key="state" onClick={() => this.preSort("state")}>
                  State
                </th>
                <th key="number">Phone Number</th>
                <th key="genres" onClick={() => this.preSort("genres")}>
                  Genres
                </th>
              </tr>
            </thead>
          </table>
          <p className="align-items-center">Oops, No Record Found</p>
        </div>
      );
    } else {
      return (
        <table className="table">
          <thead>
            <tr key="2">
              <th key="name" onClick={() => this.preSort("name")}>
                Name
              </th>
              <th key="city" onClick={() => this.preSort("city")}>
                City
              </th>
              <th key="state" onClick={() => this.preSort("state")}>
                State
              </th>
              <th key="number">Phone Number</th>
              <th key="genres" onClick={() => this.preSort("genres")}>
                Genres
              </th>
            </tr>
          </thead>
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
    }
  }
}

export default RestaurantsTable;
