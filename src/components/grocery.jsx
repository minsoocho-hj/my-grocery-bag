import React, { PureComponent } from "react";

export default class Grocery extends PureComponent {
  handleIncrease = () => {
    this.props.onIncrease(this.props.grocery);
  };

  handleDecrease = () => {
    this.props.onDecrease(this.props.grocery);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.grocery);
  };

  render() {
    const { groceryItem, count } = this.props.grocery;
    console.log(`grocery: ${groceryItem}`);
    return (
      <li className="item-list">
        <div className="list-content">
          <span className="item-title">{groceryItem}</span>
        </div>
        <div className="list-btn-group">
          <span className="item-count">{count}</span>
          <button className="plus-btn" onClick={this.handleIncrease}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button className="minus-btn" onClick={this.handleDecrease}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button className="trash-btn" onClick={this.handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    );
  }
}
