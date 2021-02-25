import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagination";
import { getStates } from "./services/getStates";
import { getGenres } from "./services/getGenres";
import Selector from "./common/Selector";
import { getGenrefiltered } from "../utils/getGenrefiltered";
import RestaurantsTable from "./RestaurantsTable";

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantsList: [],
      currPage: 1,
      pageSize: 10,
      states: [],
      genres: [],
      selectedGenre: "",
      selectedState: "",
      sortColumn: { path: "name", order: "asc" },
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

  handleGenresSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre });
  };

  handleStatesSelect = (stateShort) => {
    console.log(stateShort);
    this.setState({ selectedState: stateShort });
  };

  handleOnSort = (column) => {
    this.setState({ sortColumn: column });
  };

  // {id, name, address1, city, state, zip, lat, long, telephone, tags, website, genre, hours, attire}
  // name, city, state, phone number, and genres
  render() {
    const { restaurantsList } = this.state;
    const {
      pageSize,
      currPage,
      sortColumn,
      selectedGenre,
      selectedState,
    } = this.state;
    const count = restaurantsList.length;
    const states = getStates(restaurantsList);
    const genres = getGenres(restaurantsList);
    // const restaurantsListSorted = restaurantsList.sort(function (a, b) {
    //   return a.name - b.name;
    // });
    // console.log(restaurantsListSorted);
    const statefiltered = selectedState
      ? restaurantsList.filter((r) => r.state === selectedState)
      : restaurantsList;

    const genrefiltered = selectedGenre
      ? getGenrefiltered(restaurantsList, selectedGenre)
      : restaurantsList;

    const filtered = statefiltered.filter((r) => {
      return genrefiltered.indexOf(r) !== -1;
    });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const restaurantsArray = paginate(sorted, currPage, pageSize);

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
              <Selector items={states} onItemSelect={this.handleStatesSelect} />
            </div>
          </div>
          <div className="col-2">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  Genres
                </label>
              </div>
              <Selector items={genres} onItemSelect={this.handleGenresSelect} />
            </div>
          </div>
        </div>
        <RestaurantsTable
          restaurantsInTable={restaurantsArray}
          onSort={this.handleOnSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currPage={currPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Restaurants;
