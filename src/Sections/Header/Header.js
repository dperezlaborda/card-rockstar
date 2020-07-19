import React from 'react';
import './Header.scss';

const Header = () =>{
    return(
        <header className="container-header">
            <div className="container-text">
            <h1>I'll be a rock 'n' rollin' bitch for you</h1>
                <div className="right">
                    <div className="rectangle">
                        <h2>moonage dream</h2>
                        <p>- david bowie</p>
                    </div>
                </div>
            </div>
            <div className="container-bttn"> 
                <a href="index.html" className="btn btn-sm animated-button thar-two">home</a>
                <a href="index.html" className="btn btn-sm animated-button thar-two">about</a>
                <a href="index.html" className="btn btn-sm animated-button thar-two">news</a>
            </div>
        </header>
    )
}

export default Header;