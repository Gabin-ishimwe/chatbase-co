export type Action = {
  type: string;
  payload: any;
};
export const initialState = {
  data: null,
  error: null,
};
export const chatbotReducer = (initialState: any, action: Action) => {
  switch (action.type) {
    case "FETCH_CHATBOT":
      return { ...initialState, data: action.payload };

    case "CHANGE_NAME":
      return {
        ...initialState,
        data: { ...initialState.data, name: action.payload },
      };
    case "CHANGE_MODEL":
      return {
        ...initialState,
        data: { ...initialState.data, model: action.payload },
      };
    case "CHANGE_VISIBILITY":
      return {
        ...initialState,
        data: { ...initialState.data, isPublic: action.payload },
      };
    case "CHANGE_DOMAIN":
      return {
        ...initialState,
        data: { ...initialState.data, botLink: action.payload },
      };
    case "CHANGE_INITIAL_MESSAGE":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            initialMessage: action.payload,
          },
        },
      };
    case "RESET_INITIAL_MESSAGE":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            initialMessage: action.payload,
          },
        },
      };
    case "CHANGE_THEME":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            theme: action.payload,
          },
        },
      };
    case "CHANGE_DISPLAY_NAME":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            displayName: action.payload,
          },
        },
      };
    case "CHANGE_MESSAGE_COLOR":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            messageColor: action.payload,
          },
        },
      };
    case "RESET_MESSAGE_COLOR":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotInterface: {
            ...initialState.data.chatbotInterface,
            messageColor: action.payload,
          },
        },
      };
    case "CHANGE_PROFILE":
      return {
        ...initialState,
        data: {
          ...initialState.data,
          chatbotProfile: action.payload,
        },
      };
    default:
      return initialState;
  }
};
