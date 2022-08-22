import React from 'react';
import './App.scss';
import Message from '../message/message';

type AppProps = {
  messageText: string;
}

function App({messageText}: AppProps) {
  return (
    <div className="app">
      <Message messageText={messageText} />
    </div>
  );
}

export default App;
