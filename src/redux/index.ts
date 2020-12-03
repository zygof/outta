import { authReducer } from "./user/reducer";
import article from "./article/reducer";
import franchise from "./franchise/reducer";
import reduction from "./reduction/reducer";
import restaurant from "./restaurant/reducer";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export default store;
