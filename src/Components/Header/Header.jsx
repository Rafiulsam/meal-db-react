import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div >
            <nav className='header'>
                <h1>Meal-<span>DB</span></h1>

                <div>
                    <a href="info">Info</a>
                    <a href="">Blog</a>
                    <a href=""><strong>Log in</strong></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;