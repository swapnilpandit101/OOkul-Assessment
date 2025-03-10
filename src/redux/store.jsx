// src/redux/store.jsx 
import { configureStore } from '@reduxjs/toolkit';
import kmlReducer from './KmlSlice';

export const store = configureStore({
  reducer: {
    kml: kmlReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

