import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import userReducer from './user/reducer';
import restaurantReducer from './restaurant/reducer';
import discountReducer from './discount/reducer';

const reducers = {
  userReducer,
  restaurantReducer,
  discountReducer,
};

export default createStore (
  persistCombineReducers (
    {
      key: 'root',
      storage: AsyncStorage,
    },
    reducers
  ),
  composeWithDevTools (applyMiddleware (thunk))
);
