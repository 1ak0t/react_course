import './message-form.scss';
import {FormEvent, FormEventHandler, useRef} from 'react';
import {nanoid} from 'nanoid';

type MessageFormProps = {
  sendMessage: any;
}

function MessageForm({sendMessage}: MessageFormProps) {
  const messageInput = useRef<HTMLInputElement | null>(null);

  const onSendHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (messageInput.current !== null) {
      sendMessage(messageInput.current.value);
      messageInput.current.value = '';
    }
  }

  return (
    <form action="" className="app__form form" onSubmit={(evt) => onSendHandler(evt)}>
      <input type="text" className="form__input" ref={messageInput} autoFocus={true}/>
      <input type="submit" className="form__button" value="Send"/>
    </form>
  );
}

export default MessageForm;