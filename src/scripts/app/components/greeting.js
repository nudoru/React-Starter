import React from "react";

require('!style!css!sass!../../../sass/base/_all.sass');

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
});