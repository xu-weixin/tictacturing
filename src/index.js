import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App'

injectTapEventPlugin();

ReactDOM.render(
<MuiThemeProvider>
  <App />
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
