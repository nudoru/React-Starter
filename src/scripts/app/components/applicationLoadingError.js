import React from 'react';

require('!style!css!sass!../../../sass/components/loadingmessage.sass');

export default React.createClass({
  render: function () {
    return (
      <div id="initialization__cover">
        <div className="initialization__message">
          <h1>Oh no ...</h1>
          <h2>Something went wrong starting the application.</h2>
        </div>
      </div>
    );
  }
});