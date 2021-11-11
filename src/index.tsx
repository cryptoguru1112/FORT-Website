import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: MontserratBold;
  src: url(${MontserratBold}) format('truetype');
}

body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll: no;
  overflow: hidden;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
