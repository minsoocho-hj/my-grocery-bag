import React, { Component } from "react";
import Grocery from "./grocery";

export default class Groceries extends Component {
  onReset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <>
        <ul className="groceries-list">
          {this.props.groceries.map((grocery) => (
            <Grocery
              key={grocery.id}
              grocery={grocery}
              onIncrease={this.props.onIncrease}
              onDecrease={this.props.onDecrease}
              onDelete={this.props.onDelete}
            />
            //콜백함수를 props으로 전달해주는 것.
          ))}
        </ul>
        <button className="btn-reset" onClick={this.onReset}>
          Clear the list
        </button>
      </>
    );
  }
}
