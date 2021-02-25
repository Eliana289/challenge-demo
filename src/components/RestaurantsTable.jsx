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
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.preSort("name")}>Name</th>
              <th onClick={() => this.preSort("city")}>City</th>
              <th onClick={() => this.preSort("state")}>State</th>
              <th>Phone Number</th>
              <th onClick={() => this.preSort("genres")}>Genres</th>
            </tr>
          </thead>
          <p class="align-items-center">Oops, No Record Found</p>
        </table>
      );
    } else {
      return (
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.preSort("name")}>Name</th>
              <th onClick={() => this.preSort("city")}>City</th>
              <th onClick={() => this.preSort("state")}>State</th>
              <th>Phone Number</th>
              <th onClick={() => this.preSort("genres")}>Genres</th>
            </tr>
          </thead>
          <tbody>
            {restaurantsInTable.map((restaurants) => (
              <tr>
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
