import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { handleClick, text } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        {text}
      </button>
    );
  }
}
