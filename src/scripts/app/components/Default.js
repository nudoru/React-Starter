/*
 Index or default app view
 */

import React from 'react';
import Lorem from 'react-lorem-component';

export default class Index extends React.Component {
  render() {
    return (
      <div className="app__column">
        <h1>Welcome to the app!</h1>
        <Lorem count="2"/>
        <Lorem mode="list"/>
      </div>
    );
  }
}