/*
 Index or default app view
 */

// import React from 'react';
// import Lorem from 'react-lorem-component';
//
// export default class Index extends React.Component {
//   render() {
//     return (
//       <div className="app__column">
//         <h1>Application</h1>
//         <Lorem count="2"/>
//         <Lorem mode="list" count="2"/>
//       </div>
//     );
//   }
// }

import Lorem from 'react-lorem-component';

import React from 'react';

import AppBar from 'material-ui/lib/app-bar';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import Divider from 'material-ui/lib/divider';

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
  listContainer: {
    width: 200
  }
};

const muiTheme = getMuiTheme(MaterialUIRHTheme);

class Default extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  // getChildContext() {
  //   return {muiTheme: getMuiTheme(MaterialUIRHTheme)};
  // }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Application" showMenuIconButton={false}/>
          <div style={styles.container}>
            <h1>Welcome to the app!</h1>
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
              />
              <CardText >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis
                odio.
              </CardText>

            </Card>
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Default;