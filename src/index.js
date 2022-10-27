import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Intro from './components/intro';
import Profile from './components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Intro nama="monyed"/>
    <Intro nama="babi"/>
    <Profile />
  </React.StrictMode>
);