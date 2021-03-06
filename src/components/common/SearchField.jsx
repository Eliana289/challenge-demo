import React, { Component } from "react";

class SearchField extends Component {
  state = {
    value: "",
  };

  handleTextChange = (value) => {
    this.setState({ value: value });
    if (value.length === 0) {
      this.props.onSearchClick(value);
    }
  };

  handleOnEnter = (e) => {
    const isEnterPressed = e.which === 13 || e.keyCode === 13;

    if (isEnterPressed) {
      e.preventDefault();
      this.props.onSearchClick(e.target.value);
    }
  };

  render() {
    return (
      <form onKeyPress={(e) => this.handleOnEnter(e)} className="form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="Name, State or Genre"
          onChange={(e) => this.handleTextChange(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.props.onSearchClick(this.state.value)}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchField;
