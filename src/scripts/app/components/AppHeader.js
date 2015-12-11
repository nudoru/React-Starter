import React from "react";
import HeaderNavButton from './AppHeaderButton.js'

require('!style!css!sass!../../../sass/layout/_header.sass');

export default class AppHeader extends React.Component {

  render() {
    return (
      <header className="app__header">
        <h1>{this.props.title}</h1>
        <nav className="app__header-nav">
          {this.props.navigation.map((c, i) => <HeaderNavButton key={i}
                                                                label={c}/>)}
        </nav>
      </header>
    );
  }

}

AppHeader.propTypes = {
  title     : React.PropTypes.string,
  navigation: React.PropTypes.array
};