import React from "react";
import HeaderNavButton from './headerNavButton'

require('!style!css!sass!../../../sass/layout/_header.sass');

export default React.createClass({
  render: function() {
    return (
      <header className="app__header">
        <h1>{this.props.title}</h1>
        <nav className="app__header-nav">
          <HeaderNavButton label="Projects"/>
          <HeaderNavButton label="People"/>
          <HeaderNavButton label="Help"/>
        </nav>
      </header>
    );
  }
});