import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import App from './js/App';
import Cards from "./js/Cards";
// import Iconss from './js/Iconss';
import Eventhandle from './js/Eventhandle';
import reportWebVitals from './reportWebVitals';
// import Usestate1 from './js/Hooks';
import States from './js/States';
import Formstates from './js/Formstates';
import Form from './js/Form';
// import { Icons } from 'react-toastify';
// import Application from './Application';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Eventhandle/> */}
    {/* <App /> */}
    {/* <Cards /> */}
    <States/>
    {/* <Formstates/> */}
    {/* <Form/> */}
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
