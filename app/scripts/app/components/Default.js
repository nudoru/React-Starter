/*
 Index or default app view
 */

import Lorem from 'react-lorem-component';
import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MaterialUIRHTheme from '../config/MaterialUIRHTheme';

const styles = {
  container    : {
    paddingTop: 40,
    textAlign : 'left',
    width     : '75%',
    margin    : '0 auto'
  },
  contentContainer: {
    padding: 22
  }
};

const muiTheme = getMuiTheme(MaterialUIRHTheme);

class Default extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div style={styles.container}>
            <Paper zDepth={5}>
              <div style={styles.contentContainer}>
                <h1>Welcome to the app! ~</h1>
                <Lorem />
                <h5>Some buttons showing theme colors</h5>
                <div>
                  <FlatButton label="Default"/>
                  <FlatButton label="Primary" primary={true}/>
                  <FlatButton label="Secondary" secondary={true}/>
                  <FlatButton label="Disabled" disabled={true}/>
                </div>
                <div>
                  <RaisedButton label="Default"/>
                  <RaisedButton label="Primary" primary={true}/>
                  <RaisedButton label="Secondary" secondary={true}/>
                  <RaisedButton label="Disabled" disabled={true}/>
                </div>

              </div>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


// import React from 'react';
//
// export const One = React.createClass({
//   render() {
//     return <h1>number 1</h1>;
//   }
// });

export default Default;