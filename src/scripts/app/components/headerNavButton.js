import React from "react";

require('!style!css!sass!../../../sass/layout/_header.sass');

export default React.createClass({
  render: function() {
    return (
        <button>{this.props.label}</button>
    );
  }
});