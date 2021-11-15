import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
// redux 셋팅
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { FontStyle } from './font/font'
import { GlobalStyle } from './styles/style'
import 'bootstrap/dist/css/bootstrap.css';


const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
window.Kakao.init(KAKAO_JS_KEY);

const store= createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <FontStyle/>
    <GlobalStyle/>
      <Provider store = {store}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
