import {chatListType, ChatType} from '../../types/chat-type';
import './chat-list.scss';
import {Link} from 'react-router-dom';

type ChatListProps = {
  chats: chatListType;
  addChat: () => void;
}

function ChatList({chats, addChat}: ChatListProps) {
  const setChatLink = (chat: ChatType) => {
    return `/chats/:${chat.id}`;
  }

  return (
    <>
      <Link to="/profile" className="chat-list__profile">
        <img src="../img/user.png" alt="user-icon" className="chat-list__profile-photo" />
        <h2 className="chat-list__profile-name">My Name</h2>
      </Link>
      <ul className="chat-list__wrapper">
        {chats.map((chat) =>
          (<li className="chat-list__item">
            <Link to={setChatLink(chat)} className="chat-list__link">
              <h3 className="chat-list__item-title">{chat.name}</h3>
              <div className="chat-list__item-about">
                <span className="chat-list__item-message">{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : ''}</span>
                <span className="chat-list__item-time">{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].date : ''}</span>
              </div>
            </Link>
          </li>)
        )}
        <button className="chat-list__add-chat" onClick={addChat}>+</button>
      </ul>
    </>
  );
}

export default ChatList;