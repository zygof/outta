import articleActions from "./constants";

interface Actions {
  type: string;
  token: string
}
const initialState = {
  loggedIn: false,
  isLoading: true,
};

export default function articleReducer(state = initialState, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
