import { ADD_MESSAGE } from "./actionTypes";

export const addMessage = message => {
    console.log(12)
    return {
  type: ADD_MESSAGE,
  payload: {
    message
  }
}
};
