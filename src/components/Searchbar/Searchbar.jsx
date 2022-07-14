import React, { Component } from 'react';
import s from './Searchbar.module.css';

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
      <header className={s.searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.searchbutton}>
            <span className={s.SearchFormlabel}>Search</span>
          </button>

          <input
            className={s.SearchForminput}
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
