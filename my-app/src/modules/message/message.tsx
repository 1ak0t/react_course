type MessageProps = {
  messageText: string;
}

function Message({messageText}: MessageProps) {
  return (
    <div>
        <h1 className="message">{messageText}</h1>
    </div>
  );
}

export default Message;