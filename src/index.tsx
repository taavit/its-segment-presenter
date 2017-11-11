/**
 * Entry poinit for app
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ItsApp } from './components/ItsApp';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// tslint:disable-next-line:variable-name
const App: React.StatelessComponent = () => (
  <MuiThemeProvider muiTheme={ getMuiTheme() } >
    <ItsApp />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
