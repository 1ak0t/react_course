import ChatList from '../chat-list/chat-list';
import MessagesList from '../messages-list/messages-list';
import MessageForm from '../message-form/message-form';
import {useState} from 'react';
import {MessageType} from '../../types/messageType';
import {chatListType, ChatType} from '../../types/chat-type';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';

function Main() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [chats, setChats] = useState<chatListType>([]);

  const addChat = () => {
    const chat: ChatType = {
      id: nanoid(),
      name: 'New Chat',
      messages: messages,
    }
    setChats((chats) => chats.concat(chat));
  };

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
    <>
      <div className="app__chats chat-list">
        <ChatList chats={chats} addChat={addChat} />
      </div>
      <div className="app__messaging">
        <MessagesList messages={messages}/>
        <MessageForm sendMessage={sendMessage}/>
      </div>
    </>
  );
}

export default Main;