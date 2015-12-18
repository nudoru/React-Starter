import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from '../stores/AppStore';
import Header from './AppHeader';

require('!style!css!sass!../../../sass/pages/_application.sass');
require('!style!css!sass!../../../sass/layout/_content.sass');

let _storeState       = AppStore.getState(),
    _applicationTitle = _storeState.title,
    _headerNav        = _storeState.headerButtons;

// this.props.children in the section#contents will render from the Router
export default class App extends React.Component {
  render() {
    return (
      <div id="app__container">
        <div id="app__contents">
          <Header title={_applicationTitle} navigation={_headerNav}/>
          <section className="app__content">
            <div className="app__padded-content">
              <section id="contents">
                {this.props.children}
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}