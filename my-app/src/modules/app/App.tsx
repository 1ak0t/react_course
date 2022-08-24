import './App.scss';
import MessagesList from '../messages-list/messages-list';
import MessageForm from '../message-form/message-form';
import {useEffect, useState} from 'react';
import {MessageType} from '../../types/messageType';
import {nanoid} from 'nanoid';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const sendMessage = (text: string) => {
    const message = {
      id: nanoid(),
      author: 'Igor',
      text: text,
    };

    const messageHello = {
      id: nanoid(),
      author: 'Robot',
      text: `Привет ${message.author}`,
    };

    setMessages((messages) => messages.concat(message));

    const helloTimeOut = setTimeout(() => {
      setMessages((messages) => messages.concat(messageHello));
    }, 1500);
  };

  return (
    <div className="app">
      <MessagesList messages={messages}/>
      <MessageForm sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
