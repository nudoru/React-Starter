/*
Container component for the application
Refer to React-redux to bind app to store
 https://github.com/rackt/react-redux/blob/master/docs/quick-start.md#quick-start
 */

import React from 'react';

// require('!style!css!sass!../../../sass/pages/_application.sass');

// this.props.children in the section#contents will render from the Router
export default class App extends React.Component {
  render() {
    return (
      <section id="contents">
        {this.props.children}
      </section>
    );
  }
}