import React from "react";

require('!style!css!sass!../../../sass/base/_all.sass');

export default class GreetTest extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}