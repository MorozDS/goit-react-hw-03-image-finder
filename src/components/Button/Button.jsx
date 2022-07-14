import React, { Component } from 'react';
import s from './Button.module.css';

export default class Button extends Component {
  render() {
    const { handleClick, text } = this.props;
    return (
      <button className={s.Button} type="button" onClick={handleClick}>
        {text}
      </button>
    );
  }
}
