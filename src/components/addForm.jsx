import React, { PureComponent } from "react";

export default class AddForm extends PureComponent {
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
    console.log("AddForm");
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="input-add"
          placeholder="Add your item 🍎"
        />
        <button className="btn-add">Add !</button>
      </form>
    );
  }
}
