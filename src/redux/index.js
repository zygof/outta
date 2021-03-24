import { AsyncStorage} from "react-native";
import {createStore, applyMiddleware} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import userReducer from './user/reducer';

const reducers = {
  userReducer
};

export default createStore(
  persistCombineReducers(
    {
      key: "root",
      storage: AsyncStorage,
    },
    reducers
  ),
  composeWithDevTools(applyMiddleware(thunk))
);
