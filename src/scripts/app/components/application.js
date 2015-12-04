import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from '../components/greeting';
import Header from '../components/header';
import AppStore from '../stores/appStore';

require('!style!css!sass!../../../sass/pages/_application.sass');
require('!style!css!sass!../../../sass/layout/_header.sass');
require('!style!css!sass!../../../sass/layout/_content.sass');

let _applicationTitle = AppStore.getState().title;

export default React.createClass({
  render: function () {
    return (
      <div id="app__container">
        <div id="app__contents">
          <Header title={_applicationTitle}/>
          <section className="app__content">
            <div className="app__padded-content">
              <section id="contents">
                <Greeting name="World"/>
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
});