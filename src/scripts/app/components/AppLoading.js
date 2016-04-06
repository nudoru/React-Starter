import React from 'react';

require('!style!css!sass!../../../sass/app/components/covermessage.sass');
require('!style!css!../../../sass/app/components/loadingspinner.css');

export default class AppLoading extends React.Component {
  render() {
    return (
      <div className="covermessage__cover">
        <div className="covermessage__message">
          <h1>Please wait ...</h1>
          <div className="loadingspinner">
            <div className="cssload-spin-box"></div>
          </div>
        </div>
      </div>
    );
  }
}