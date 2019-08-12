import { ADD_MESSAGE } from "./actionTypes";

export const addMessage = message => {
    return {
  type: ADD_MESSAGE,
  payload: {
    message
  }
}
};
