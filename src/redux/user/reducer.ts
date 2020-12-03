import AsyncStorage from '@react-native-community/async-storage';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {userMethod} from './actions';

interface State {
  token: string | null;
  isLoading: boolean;
  isRestoring: boolean;
}

interface Credentials {
  username: string;
  password: string;
}

const initialState: State = {
  isLoading: false,
  isRestoring: true,
  token: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ username, password }: Credentials) => {
    const res = await userMethod.signIn(username, password);
    await AsyncStorage.setItem('userToken', res.token);
    return res;
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  ({ username, password }: Credentials) => userMethod.signUp(username),
);

const authSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      signIn.pending,
      (state) => ({ ...state, isLoading: true }),
    );

    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<any>) => ({ isLoading: false, isRestoring: false, token: action.payload.token }),
    );

    builder.addCase(
      signIn.rejected,
      (state) => ({ ...state, isLoading: false }),
    );

    builder.addCase(
      signUp.pending,
      (state) => ({ ...state, isLoading: true }),
    );

    builder.addCase(
      signUp.fulfilled,
      (state) => ({ ...state, isLoading: false }),
    );

    builder.addCase(
      signUp.rejected,
      (state) => ({ ...state, isLoading: false }),
    );
  },
  initialState,
  name: 'auth',
  reducers: {
    restore: (state, action: PayloadAction<{token: string}>): State => (
      { ...state, isRestoring: false, token: action.payload.token }
    ),
    signOut: (): State => {
      void AsyncStorage.removeItem('userToken');
      return { ...initialState, isRestoring: false };
    },
  },
});

interface Store { auth: State }

export const selectIsLoading = (store: Store): boolean => store.auth.isLoading;
export const selectIsRestoring = (store: Store): boolean => store.auth.isRestoring;
export const selectToken = (store: Store): string | null => store.auth.token;

export const { restore, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
