import {MessageType} from '../../types/messageType';
import './message.scss';
import dayjs from 'dayjs';

type MessageProps = {
  message: MessageType;
}

function Message({message}: MessageProps) {
  return (
    <div className={`message ${message.author !== 'Igor' ? 'message--left': ''}`}>
      <div className={`message__wrapper  ${message.author !== 'Igor' ? 'message__wrapper--left': ''}`}>
        <span className="message__text">{message.text}</span>
      </div>
      <div className="message__about">
        <span className="message__author">{message.author !== 'Igor' ? message.author: ''}</span>
        <span className="message__time">{message.date}</span>
      </div>
    </div>
  );
}

export default Message;