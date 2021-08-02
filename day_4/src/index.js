import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { PostStore } from './redux/store/store';

// Provider is used to make sure the redux store is available to all components in app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={PostStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
