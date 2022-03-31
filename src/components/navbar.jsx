import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <h1 className="nav-title">🛒 My grocery bag</h1>
          <p className="nav-count">{this.props.totalCount}</p>
        </nav>
      </div>
    );
  }
}
