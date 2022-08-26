import './App.scss';
import MessagesList from '../messages-list/messages-list';
import MessageForm from '../message-form/message-form';
import {useState} from 'react';
import {MessageType} from '../../types/messageType';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';
import ChatList from '../chat-list/chat-list';
import {chatListType} from '../../types/chat-type';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const chats: chatListType = [
    {
      id: nanoid(),
      name: 'Red Chat',
      messages: messages,
    },
    {
      id: nanoid(),
      name: 'Blue Chat',
      messages: messages,
    },
    {
      id: nanoid(),
      name: 'Green Chat',
      messages: messages,
    }
  ];

  const sendMessage = (text: string) => {
    const message = {
      id: nanoid(),
      author: 'Igor',
      text: text,
      date: dayjs().format('H:mm'),
    };

    const messageHello = {
      id: nanoid(),
      author: 'Robot',
      text: `Hi ${message.author}`,
      date: dayjs().format('H:mm'),
    };

    setMessages((messages) => messages.concat(message));

    const helloTimeOut = setTimeout(() => {
      setMessages((messages) => messages.concat(messageHello));
    }, 1500);
  };

  return (
    <div className="app">
      <div className="app__chats chat-list">
        <ChatList chats={chats}/>
      </div>
      <div className="app__messaging">
        <MessagesList messages={messages}/>
        <MessageForm sendMessage={sendMessage}/>
      </div>
    </div>
  );
}

export default App;
