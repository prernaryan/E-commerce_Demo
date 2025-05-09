import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import notesReducer from './slice/notesSlice';
import shoppingReducer from './slice/shoppingSlice';
import {apiSlice} from '../services/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
    products: shoppingReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
