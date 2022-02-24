import React, { Component } from "react";
import Grocery from "./grocery";
import AddForm from "./addForm";
export default class Groceries extends Component {
  handleIncrement = (grocery) => {
    this.props.onIncrease(grocery);
  };

  handleDecrement = (grocery) => {
    this.props.onDecrease(grocery);
  };

  handleDelete = (grocery) => {
    this.props.onDelete(grocery);
  };

  handleAddItem = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div className="groceries">
        <ul className="groceries-list">
          <AddForm onAdd={this.handleAddItem} />
          {this.props.groceries.map((grocery) => (
            <Grocery
              key={grocery.id}
              grocery={grocery}
              onIncrease={this.handleIncrement}
              onDecrease={this.handleDecrement}
              onDelete={this.handleDelete}
            />
            //콜백함수를 props으로 전달해주는 것.
          ))}
        </ul>
        <button className="btn-reset" onClick={this.props.onReset}>
          Clear the list
        </button>
      </div>
    );
  }
}
