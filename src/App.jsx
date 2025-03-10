//src/App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import FileUpload from './components/FileUpload';
import Map from './components/Map';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">KML File Viewer</h1>
        <FileUpload />
        <Map />
      </div>
    </Provider>
  );
};

export default App;
