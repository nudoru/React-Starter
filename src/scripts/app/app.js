import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting';
import Header from './components/header';
import AppStore from './stores/appStore';
import LoadConfig from './loadConfig.js';
//import Actions from './actions/actionCreators.js';
//import Rest from '../nori/service/Rest.js';

require('!style!css!sass!../../sass/pages/_application.sass');
require('!style!css!sass!../../sass/layout/_header.sass');
require('!style!css!sass!../../sass/layout/_content.sass');

let _applicationTitle = AppStore.getState().title;

// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});

LoadConfig.load();

ReactDOM.render(
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
  </div>,
  document.querySelector('#application')
);