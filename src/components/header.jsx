import React, { Component } from "react";

export default class Header extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
    //this.inputRef.curren.value = '';
  };

  render() {
    const sum = this.props.groceries.filter((item) => item.count > 0).length;
    return (
      <>
        <div>
          <nav>
            <h1 className="nav-title">🛒 My grocery bag</h1>
            <p className="nav-count">{sum}</p>
          </nav>
          <form
            className="add-form"
            onSubmit={this.onSubmit}
            ref={this.formRef}
          >
            <input
              type="text"
              placeholder="Add your item 🍎"
              className="input-add"
              ref={this.inputRef}
            />
            <button className="btn-add">Add !</button>
          </form>
        </div>
      </>
    );
  }
}
