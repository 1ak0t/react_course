import './App.scss';
import MessagesList from '../messages-list/messages-list';
import MessageForm from '../message-form/message-form';
import {useState} from 'react';
import {MessageType} from '../../types/messageType';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';
import ChatList from '../chat-list/chat-list';
import {chatListType} from '../../types/chat-type';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../main/main';
import Profile from '../profile/profile';
import NotFound from '../not-found/not-found';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats/:chatId" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
