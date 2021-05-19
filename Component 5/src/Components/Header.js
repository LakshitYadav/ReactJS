import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

const Header = (props) => {
    console.log(props);
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src="http://www.clker.com/cliparts/4/6/a/2/151763360658368674twitter-icon-square-logo-preview.hi.png" width="30" height="30" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#Link">Link</a>
                        </li> */}
                    </ul>
                    {props.isLoggedIn ?
                        <>
                            <Link type="button" className="btn btn-outline-success my-2 my-sm-0 mr-sm-2"
                                to='/'
                                onClick={() =>  props.onLogout()}>
                                Logout
                            </Link>

                            <div className="profile-info">
                                <a className="userName" href="#name">{props.username}</a>
                                <img className="profile-image" src="https://w7.pngwing.com/pngs/893/926/png-transparent-silhouette-user-icon-profile-silhouette-silhouette-avatar-profile-silhouette-thumbnail.png" alt="Logo" />
                            </div>
                        </>
                        :
                        <Link className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" to='/'>Login</Link>
                    }

                </div>
            </nav>
        </BrowserRouter>
    )
}





// const Header = () => {
//     return (
//         <div className="navbar">
//             <a href="#home" className="navbar-logo"><img className="logo" src="http://www.clker.com/cliparts/4/6/a/2/151763360658368674twitter-icon-square-logo-preview.hi.png" alt="Logo" /></a>
//             <ul className="navbar-list">
//                 <li><a className="first" href="#news">News</a></li>
//                 <li><a className="second" href="#contact">Contact</a></li>
//             </ul>
//             <div className="profile-info">
//                 <a className="userName" href="#name">Lakshit</a>
//                 <img className="profile-image" src="https://w7.pngwing.com/pngs/893/926/png-transparent-silhouette-user-icon-profile-silhouette-silhouette-avatar-profile-silhouette-thumbnail.png" alt="Logo" />
//             </div>
//         </div>
//     )
// }

export default Header;