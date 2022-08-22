import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './modules/app/App';

const MESSAGE_TEXT = 'First message!';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App messageText={MESSAGE_TEXT}/>
  </React.StrictMode>
);
