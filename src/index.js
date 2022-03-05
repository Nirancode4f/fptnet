import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { SocketContext, socket } from './SocketClient/MainSocket';

ReactDOM.render(
  <SocketContext.Provider value={socket}>
    <Provider store={store}>



      <App />



    </Provider>

  </SocketContext.Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
