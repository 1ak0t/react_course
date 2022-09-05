import Message from '../message/message';
import {MessageType} from '../../types/messageType';
import './messages-list.scss';
import {useEffect, useRef} from 'react';
import {nanoid} from 'nanoid';
import {useParams} from 'react-router-dom';

type MessagesListProps = {
  messages: MessageType[];
}

function MessagesList({messages}: MessagesListProps) {

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const chatName = useParams();
  console.log(chatName);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className="app__message-wrapper">
      <div className="app__chat-name"></div>
      <div className="app__messages-list messages-list">
        {
          messages.map((message, index) => (<Message message={message} key={index}/>))
        }
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessagesList;