import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import { apiUrl } from '@/core/config/config';
import { MessageRepository } from '@/repositories/Message';

interface MessagesState {
  myPhone: string;
  socket: Socket | null;
  messages: any[];
  chats: any[];
  chatId: string;
}

interface MessagesActions {
  connect: ({ token, myPhone }: { token: string; myPhone: string }) => void;
  disconnect: () => void;
  sendMessage: ({
    receiverPhone,
    message,
  }: {
    receiverPhone: string;
    message: string;
  }) => void;
  refreshMessage: (id: string) => void;
  setChatId: (id: string) => void;
}

type MessagesStore = MessagesState & MessagesActions;

const useMessagesStore = create<MessagesStore>((set, get) => ({
  socket: null,
  messages: [],
  chats: [],
  myPhone: '',
  chatId: '',

  connect: ({ token, myPhone }) => {
    const socket = io(`${apiUrl}`, {
      transports: ['websocket'],
      auth: { token },
    });

    socket.on('connect', () => {
      console.log(' zuztandxd Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log(' zuztandxd Disconnected from WebSocket server');
    });

    socket.on('message-from-server', async payload => {
      // set(state => ({
      //   messages: [...state.messages, payload],
      // }));
      // const _contact=
      const _message: {
        sender: string;
        chat: string;
        message: string;
      } = {
        sender: payload.senderPhone,
        chat: payload.senderPhone,
        message: payload.message,
      };
      const _resp = await MessageRepository.sendMessage(_message);
      get().chatId === payload.senderPhone &&
        get().refreshMessage(payload.senderPhone);
    });

    set(() => ({
      myPhone: myPhone,
    }));
    set({ socket });
  },

  disconnect: () => {
    set(state => {
      if (state.socket) {
        state.socket.disconnect();
      }
      return { socket: null };
    });
  },

  sendMessage: async ({ receiverPhone, message }) => {
    if (!message) return;
    const _message = {
      sender: get().myPhone,
      chat: receiverPhone,
      message: message,
    };
    const _resp = await MessageRepository.sendMessage(_message);
    set(state => {
      if (state.socket) {
        state.socket.emit('message-from-client', { receiverPhone, message });
      }
      return state;
    });
    get().refreshMessage(receiverPhone);
  },

  refreshMessage: async id => {
    if (id) {
      const _messageByChat = await MessageRepository.findMessagesByChat(id);
      set(() => ({
        messages: _messageByChat.messages,
      }));
    } else {
      set(state => ({
        messages: [],
      }));
    }
  },

  setChatId: (id: string) => {
    set(() => ({
      chatId: id,
    }));
  },
}));

export default useMessagesStore;
