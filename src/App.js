import React from 'react'
import Chat from './components/chat/Chat'
import { addMessage } from './redux/actions'
import store from './redux/store'
import socket from './socket'

import './style.sass'

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    store.dispatch(addMessage(message));
    const chat = document.querySelector('.message-list');
    chat.scrollTop = chat.scrollTopMax;
}

const App = () => (<Chat className="chat"/>)

export default App

