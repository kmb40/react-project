/*
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
import Header from "./header"

function PageBody() {
    return(
        <div>
            <h1>Reasons that I am learning REACTjs</h1>
                <ol>
                    <li>
                        <a href="#">I love to learn.</a>
                    </li>
                    <li>
                        <a href="#">To keep programming skills from going into cold storage.</a>
                    </li>
                    <li>
                        <a href="#">To build on existing programming skills.</a>
                    </li>
                </ol>
        </div>
    )
}


function Footer(){
    return(
        <footer><small>© 2023 Brown development. All rights reserved.</small></footer>
    )
}

function WhyIlearnPage(){
    return (
        <div>
            <Header/>
            <PageBody/>
            <Footer />
        </div>
        )       
    }
    // Written on a single line

ReactDOM.render(<WhyIlearnPage />, document.getElementById("root"))