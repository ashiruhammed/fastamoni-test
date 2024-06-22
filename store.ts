import { createSlice, configureStore, createStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const initialState = {
  user: {
    username: '',
    email: '',
    password: '',
  },
  loggedIn: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };

    case 'REMOVE_USER':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case 'LOGOUT_USER': {
      return {
        ...state,
        loggedIn: false,
      };
    }
    case 'EDIT_USER': {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
