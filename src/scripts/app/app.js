import React from "react";
import ReactDOM from "react-dom"
import Greeting from './components/greeting'
import Header from './components/header'

require('!style!css!sass!../../sass/pages/_application.sass');
require('!style!css!sass!../../sass/layout/_header.sass');
require('!style!css!sass!../../sass/layout/_content.sass');

ReactDOM.render(
  <div id="app__container">
    <div id="app__contents">
      <Header title="Welcome to the Application"/>
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