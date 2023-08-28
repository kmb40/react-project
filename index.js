//There are multiple lessons and challanges commented out with /*lesson here*/ in this page. Remove comments to display the code.

// Lesson - Paragrpah with ordered and unordered list
/*
ReactDOM.render(
<p>Hi, my name is KB!
    <ol> List 1
        <li>Item 1</li>
    </ol>
    <ul> List 2
        <li>Item 2</li>
    </ul>
</p>, document.getElementById("root"));
*/

//Lesson - Functions
/*  
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (<p>Main Content is here.</p>)
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>, 
    document.getElementById("root"))
    */

// Challenge - Imperative 
/*
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/

//Lesson JSX with Two Parent Elements - Wrong
//ReactDOM.render(<h1>This is JSX</h1><p>second element</p>, document.getElementById("root"))

//Lesson JSX with One Parent Element - Correct
/*
ReactDOM.render(
    <div>
        <h1>This is JSX</h1>
        <p>second element</p>
    </div>, document.getElementById("root"))
*/

//Lesson JSX with One Parent Element in a variable "page"
/*
const page = (
    <div>
        <h1>This is JSX</h1>
        <p>second element</p>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))
*/

// Challenge - NavBar
/*
const navbar = (
    <nav>
        <h1>Mayvik</h1>
        <ul>
        <li>
            <a href="#">Pricing</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        </ul>
    </nav>
    )

ReactDOM.render(navbar, document.getElementById("root"))
*/
// Challenge - NavBar with React version 18
/*
const navbar = (
    <nav>
        <h1>Mayvik</h1>
        <ul>
        <li>
            <a href="#">Pricing</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        </ul>
    </nav>
    )
*/
// Written on a single line
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// Can also be written on two lines.
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(navbar)

// Reverting back to version 17
// Challenge - Reverted back to React version 17 - Write a single back using a variable and the append feature. 
// The lesson was reverted from "append" which failed to produce the required result.
/*
const samplePage = (
    <div>
        <h1>Mayvik</h1>
        <ul>
        <li>
            <a href="#">Pricing</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        </ul>
    </div>
    )
// Written on a single line
ReactDOM.render(samplePage, document.getElementById("root"))
*/
/*
// Lesson Project Part 1
const projectPage = (
    <div>
        <img src="react-logo.png" width="40px"/>
        <br /><br />
        <h1>Funs facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
// Written on a single line
ReactDOM.render(projectPage, document.getElementById("root"))
*/
/*
// Lesson Custom Components
function ProjectPage() {
    return (
    <div>
        <img src="react-logo.png" width="40px"/>
        <br /><br />
        <h1>Funs facts about React</h1>
        <ul>
            <li>Was first released iin 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
            )
    }   
// Written on a single line
ReactDOM.render(<ProjectPage />, document.getElementById("root"))
*/
/*
// Challenge Part 1 Custom ol
function WhyIlearnPage(){
return (
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
    </div>)     
                         }
// Written on a single line
ReactDOM.render(<WhyIlearnPage />, document.getElementById("root"))
*/
/*
// Challenge Part 2 Custom ol
function WhyIlearnPage(){
    return (
        <div>
            <header>
                 <nav>
                      <img src="react-logo.png" width="40px"/> Header Element
                 </nav>
            </header>
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
            <footer><small>© 2023 Brown development. All rights reserved.</small></footer>
        </div>
        )       
    }
    // Written on a single line
    ReactDOM.render(<WhyIlearnPage />, document.getElementById("root"))
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