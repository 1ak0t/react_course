import {MessageType} from '../../types/messageType';
import './message.scss';
import dayjs from 'dayjs';

type MessageProps = {
  message: MessageType;
}

function Message({message}: MessageProps) {
  return (
    <div className="message">
      <div className="message__wrapper">
        <span className="message__text">{message.text}</span>
        <div className="message__about">
          <span className="message__author">{message.author}</span>
          <span className="message__time">{dayjs().format('H:mm')}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;