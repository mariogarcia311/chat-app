import { apiUrl } from '@/core/config/config';
import { io, Manager, Socket } from 'socket.io-client';
let socket: Socket;

export const connecToServer = (token: string) => {
  socket = io(`${apiUrl}`, {
    transports: ['websocket'],
    auth: {
      token: token,
    },
  });
  addListeners();
};

const addListeners = () => {
  socket.on('connect', () => {
    console.log('connect');
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('message-from-server', payload => {
    console.log('mensaje recibido', payload);
  });

  // messageForm.addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     if( messageInput.value.trim().length <= 0 ) return;

  //     socket.emit('message-from-client', {
  //         id: 'YO!!',
  //         message: messageInput.value
  //     });

  //     messageInput.value = '';
  // });

  // socket.on('message-from-server', ( payload: { fullName: string, message: string }) => {
  //     const newMessage = `
  //         <li>
  //             <strong>${ payload.fullName }</strong>
  //             <span>${ payload.message }</span>
  //         </li>
  //     `;
  //     const li = document.createElement('li');
  //     li.innerHTML = newMessage;
  //     messagesUl.append( li );

  // })
};
export const socketSendMessage = ({
  receiverPhone,
  message,
}: {
  receiverPhone: string;
  message: string;
}) => {
  socket.emit('message-from-client', {
    receiverPhone,
    message: message,
  });
};
export const disconnecToServer = () => socket.disconnect();
