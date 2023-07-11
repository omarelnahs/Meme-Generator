/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Logo from "../images/troll-face.png"

export default function Header() {
    return (            
        <header className="header">
            <img className="header--image" src={Logo} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}