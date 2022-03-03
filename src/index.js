import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { SocketContext,socket} from './SocketClient/MainSocket';

ReactDOM.render(
  <Provider store={store}>
    
<SocketContext.Provider value={socket}>

      <App />
      
</SocketContext.Provider>
  

  </Provider>

  ,
  document.getElementById('root')
);

reportWebVitals();
