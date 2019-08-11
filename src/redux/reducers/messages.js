import { ADD_MESSAGE } from "../actionTypes";

const initialState = {
  messages: [123]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message]
      };
    }
    default:
      return state;
  }
}
