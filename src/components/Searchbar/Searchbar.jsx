import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchvalue: '',
  };

  onChange = e => {
    this.setState({ searchvalue: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { onSearchClick } = this.props;
    onSearchClick(this.state.searchvalue);
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.onSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autoComplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.searchvalue}
          />
        </form>
      </header>
    );
  }
}
