import {chatListType} from '../../types/chat-type';
import './chat-list.scss';

type ChatListProps = {
  chats: chatListType;
}

function ChatList({chats}: ChatListProps) {
  return (
    <ul className="chat-list__wrapper">
      {chats.map((chat) =>
        (<li className="chat-list__item">
            <h3 className="chat-list__item-title">{chat.name}</h3>
          <div className="chat-list__item-about">
            <span className="chat-list__item-message">{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : ''}</span>
            <span className="chat-list__item-time">{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].date : ''}</span>
          </div>
        </li>)
      )}
    </ul>
  );
}

export default ChatList;