import React, { Component } from 'react';
import s from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.scrollTo({ top: 0 });
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCLick = () => {
    this.props.onClose();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <>
        <div onClick={this.handleCLick} className={s.overlay}></div>
        <div className={s.modal}>{this.props.children}</div>
      </>
    );
  }
}