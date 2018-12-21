import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style.overflow = 'hidden';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
