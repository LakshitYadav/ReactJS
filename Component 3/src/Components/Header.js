import React from 'react';

const Header = () => {
    return (
        <div className="navbar">
            <a href="#home" className="navbar-logo"><img className="logo" src="http://www.clker.com/cliparts/4/6/a/2/151763360658368674twitter-icon-square-logo-preview.hi.png" alt="Logo" /></a>
            <ul className="navbar-list">
                <li><a className="first" href="#news">News</a></li>
                <li><a className="second" href="#contact">Contact</a></li>
            </ul>
            <div className="profile-info">
                <a className="userName" href="#name">Lakshit</a>
                <img className="profile-image" src="https://w7.pngwing.com/pngs/893/926/png-transparent-silhouette-user-icon-profile-silhouette-silhouette-avatar-profile-silhouette-thumbnail.png" alt="Logo" />
            </div>
        </div>
    )
}

export default Header;