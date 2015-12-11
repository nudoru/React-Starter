import React from "react";

require('!style!css!sass!../../../sass/layout/_header.sass');

export default class AppHeaderButton extends React.Component {
  render() {
    return (
        <button>{this.props.label}</button>
    );
  }
}