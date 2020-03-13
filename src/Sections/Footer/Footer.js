import React from 'react';
import './Footer.scss';

const Footer = () =>{
    return(
        <footer className="container-ftr">
            <ul className="no-list container-links">
                <li>
                    <a className="logo" href=" https://www.linkedin.com/in/dolores-perez-laborda/" aria-label="Link to LinkedIn">
                        <i class="fa fa-linkedin"  aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="logo" href="https://github.com/dperezlaborda" aria-label="Link to GitHub">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="logo" href="https://www.instagram.com/loli.perezlaborda/" aria-label="Link to Instagram">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
            <div className="box-ftr">
                <p>© 2020 Dolores Perez Laborda. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;