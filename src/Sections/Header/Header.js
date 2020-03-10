import React from 'react';
import './Header.scss';

const Header = () =>{
    return(
        <header className="container-header">
            <div className="container-text">
            <h1>I'll be a rock 'n' rollin' bitch for you</h1>
                <div className="right">
                    <div className="rectangle"></div>
                    <h2>moonage dream</h2>
                    <p>- david bowie</p>
                </div>
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
            </nav>
        </header>
    )
}

export default Header;