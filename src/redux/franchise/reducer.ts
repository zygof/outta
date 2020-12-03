import userActions from "./constants";

interface Actions {
  type: string;
  user: User,
  token: string
}
const initialState = {
  loggedIn: false,
  isLoading: true,

};

export default function franchiseReducer(state = initialState, action: Actions) {
  switch (action.type) {

    default:
      return state;
  }
}
