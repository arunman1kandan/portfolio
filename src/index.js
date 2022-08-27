import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {UsethemeProvider}  from './ThemeChanger';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsethemeProvider>
      <App />
  </UsethemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
