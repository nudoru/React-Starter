import React from "react";
import {Link} from "react-router"

require('!style!css!sass!../../../sass/layout/_header.sass');

// Handler for button click
const onButtonPress = (e) => {
  console.log('press',e.target.textContent.toLowerCase());
};

// Button component
const NavButton = ({label}) => <Link to={label.toLowerCase()}><button onClick={onButtonPress}>{label}</button></Link>;

// Header bar
export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="app__header">
        <h1>{this.props.title}</h1>
        <nav className="app__header-nav">
          {this.props.navigation.map((c, i) => <NavButton key={i}
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