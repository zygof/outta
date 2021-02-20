
import { AsyncStorage} from "react-native";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistCombineReducers } from "redux-persist";

import thunk from "redux-thunk";
import counter from './counter/reducer';

const reducers = {
    counter
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
  