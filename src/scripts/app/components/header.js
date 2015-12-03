import React from "react";
import HeaderNavButton from './headerNavButton.js'
import AppState from '../stores/appStore.js';

require('!style!css!sass!../../../sass/layout/_header.sass');

export default React.createClass({
  render: function() {

    let _headerButtons = AppState.getState().headerButtons;

    return (
      <header className="app__header">
        <h1>{this.props.title}</h1>
        <nav className="app__header-nav">
          {_headerButtons.map( (c, i) => <HeaderNavButton key={i} label={c}/> )}
        </nav>
      </header>
    );
  }
});