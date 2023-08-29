/* This are default files provided by react create-app function

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import Header from "./header"
import PageBody from "./pageBody"
import Footer from "./footer"


function WhyIlearnPage(){
    return (
        <div>
            <Header />
            <PageBody />
            <Footer />
        </div>
        )       
    }
    // Written on a single line

ReactDOM.render(<WhyIlearnPage />, document.getElementById("root"))