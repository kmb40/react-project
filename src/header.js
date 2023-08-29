import React from "react"

export default function Header(){
    return (
        <header>
             <nav className="nav">
                <img className="nav-logo" src="logo192.png" />
                  <ul className="nav-items">
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
        </header>
    )
}