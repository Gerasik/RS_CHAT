import { ADD_MESSAGE, LOG_IN, LOG_OUT, ON_CONNECT, ON_DISCONNECT } from "./actionTypes";

export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: {
    message
    }
  }
};

export const logIn = (name) => {
  return {
    type: LOG_IN,
    payload: {
      name
    }
  }
};

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

export const onConnect = () => {
  const socket = new WebSocket("ws://st-chat.shas.tel");
  return {
    type: ON_CONNECT,
    payload: {
      socket
    }
  }
} 

export const onDisconnect = () => {
  return {
    type: ON_DISCONNECT
  }
}