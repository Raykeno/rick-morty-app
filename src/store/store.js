import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});