import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagination";
import { getStates } from "./services/getStates";
import { getGenres } from "./services/getGenres";
import Selector from "./Selector";

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantsList: [],
      currPage: 1,
      pageSize: 10,
      states: [],
      genres: [],
    };
  }

  componentDidMount() {
    const headers = { Authorization: "Api-Key q3MNxtfep8Gt" };
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => this.setState({ restaurantsList: data }));
  }

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currPage: page });
  };
  // {id, name, address1, city, state, zip, lat, long, telephone, tags, website, genre, hours, attire}
  // name, city, state, phone number, and genres
  render() {
    const { restaurantsList } = this.state;
    const { pageSize, currPage } = this.state;
    const count = restaurantsList.length;
    const states = getStates(restaurantsList);
    const genres = getGenres(restaurantsList);
    // const restaurantsListSorted = restaurantsList.sort(function (a, b) {
    //   return a.name - b.name;
    // });
    // console.log(restaurantsListSorted);
    const restaurantsArray = paginate(restaurantsList, currPage, pageSize);

    return (
      <React.Fragment>
        <p>The total number of restaurants is {restaurantsList.length}</p>
        <div className="row">
          <div className="col">
            <form class="form-inline">
              <input
                class="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-2">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  States
                </label>
              </div>
              <Selector items={states} />
            </div>
          </div>
          <div className="col-2">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  Genres
                </label>
              </div>
              <Selector items={genres} />
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {restaurantsArray.map((restaurants) => (
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currPage={currPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Restaurants;
