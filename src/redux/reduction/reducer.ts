interface Actions {
  type: string;
  token: string
}
const initialState = {
  loggedIn: false,
  isLoading: true,
  currentUser: null,
  userToken: null,
};

export default function userReducer(state = initialState, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
