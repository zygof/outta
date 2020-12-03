import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import user from "./user/reducer";
import article from "./article/reducer";
import franchise from "./franchise/reducer";
import reduction from "./reduction/reducer";
import restaurant from "./restaurant/reducer";
//import { configureStore, Action } from "@reduxjs/toolkit"

let reducers = {
  user,
  article,
  franchise,
  reduction,
  restaurant,
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