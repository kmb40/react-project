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