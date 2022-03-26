import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container'>
            <a className="navbar-brand text-white" href="#Brand">Sneakers Shop</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#home">Shop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#link">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href='#dis'>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Header;