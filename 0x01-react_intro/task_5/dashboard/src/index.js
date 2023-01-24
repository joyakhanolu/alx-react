import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import './Notifications/Notifications.js';
import Notifications from './Notifications/Notifications';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className='root-notifications'>
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
