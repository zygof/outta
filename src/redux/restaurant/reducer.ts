interface Actions {
  type: string;
}
const initialState = {
  loggedIn: false,
  isLoading: true,
};

export default function userReducer(state = initialState, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
