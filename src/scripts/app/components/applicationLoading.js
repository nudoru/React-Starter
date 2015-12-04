import React from 'react';

require('!style!css!sass!../../../sass/components/loadingmessage.sass');
require('!style!css!../../../sass/components/loadingspinner.css');

export default React.createClass({
  render: function () {
    return (
      <div id="initialization__cover">
        <div className="initialization__message">
          <h1>Reticulating Splines</h1>
          <div className="loadingspinner">
            <div className="cssload-spin-box"></div>
          </div>
        </div>
      </div>
    );
  }
});