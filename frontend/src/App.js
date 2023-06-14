import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './redux/resumeSlice';
import UploadResumeButton from './components/button/UploadResumeButton';

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Bio Boost</h1>
        <UploadResumeButton />
      </div>
    </Provider>
  );
};

export default App; // Add this line to export the App component as the default export

ReactDOM.render(<App />, document.getElementById('root'));