const initialState = {
  currentUser: 3132321,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
