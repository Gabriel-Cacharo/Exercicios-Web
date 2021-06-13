import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
