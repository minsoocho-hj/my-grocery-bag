import React, { Component } from "react";
import "./app.css";
import Groceries from "./components/groceries";
import Header from "./components/header";

export default class App extends Component {
  state = {
    groceries: [
      { id: Date.now() - 1, groceryItem: "Apple", count: 0 },
      { id: Date.now() - 2, groceryItem: "Oatmeal", count: 0 },
      { id: Date.now(), groceryItem: "Greek yogurt", count: 0 },
    ],
  };

  handleIncrease = (grocery) => {
    //state 직접 변경 삼가 > 대신 spread operator 사용해 배열 복사.
    const groceries = [...this.state.groceries];
    const index = groceries.indexOf(grocery);
    groceries[index].count++;
    this.setState({ groceries });
  };

  handleDecrease = (grocery) => {
    const groceries = [...this.state.groceries];
    const index = groceries.indexOf(grocery);
    const count = groceries[index].count - 1;
    // TODO....이것도 사실상 직접 접근해 업데이트 하는 것이라,, 수정필요.
    groceries[index].count = count > 0 ? count : 0;
    this.setState({ groceries });
  };

  handleDelete = (grocery) => {
    const groceries = this.state.groceries.filter(
      (item) => item.id !== grocery.id
    );
    this.setState({ groceries });
  };

  handleAddItem = (name) => {
    const groceries = [
      ...this.state.groceries,
      {
        id: Date.now(),
        groceryItem: name.charAt(0).toUpperCase() + name.slice(1),
        count: 0,
      },
    ];
    this.setState({ groceries });
  };

  handleReset = (event) => {
    const groceries = this.state.groceries.filter((item) => item.count === ``);
    this.setState({ groceries });
  };

  render() {
    return (
      <>
        <Header groceries={this.state.groceries} onAdd={this.handleAddItem} />

        <Groceries
          key={this.state.id}
          groceries={this.state.groceries}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
