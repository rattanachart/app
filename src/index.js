import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';
import Splash from'./Splash.js';

function noop() { }

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
}

const app = document.querySelector('#root');

const render = async () => {
  ReactDOM.render(
    <Root><Splash/></Root>,
    app
  );
};

render();
