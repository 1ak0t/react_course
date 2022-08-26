import {MessageType} from './messageType';

export type ChatType = {
  id: string;
  name: string;
  messages: MessageType[];
}

export type chatListType = ChatType[];