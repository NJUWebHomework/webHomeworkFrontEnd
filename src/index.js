import './index.html';
import './index.less';
import dva from 'dva';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import { browserHistory } from 'dva/router';

injectTapEventPlugin();
// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
const reqContext = require.context('./models', true, /^\.\/.*\.js$/);
reqContext.keys().forEach((key) => {
  app.model(reqContext(key));
});



// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
