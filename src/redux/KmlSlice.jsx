// src/redux/KmlSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  kmlData: null,
  fileName: '',
  loading: false,
  error: null,
};

const kmlSlice = createSlice({
  name: 'kml',
  initialState,
  reducers: {
    setKMLData: (state, action) => {
      state.kmlData = action.payload;
    },
    setFileName: (state, action) => {
      state.fileName = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setKMLData, setFileName, setLoading, setError } = kmlSlice.actions;
export default kmlSlice.reducer;
