import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { Component } from 'react';
import { IconButton } from '@material-ui/core';
import tinder_logo from './img/tinder_logo.png';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/> 
        </IconButton>
    <img className="header__logo"
    src={tinder_logo}
    alt=""/>
    <IconButton>
    <ForumIcon fontSize="large" className="header__icon"/>
    </IconButton>
    
    </div>
    );
}

export default Header


// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                 <IconButton>
//                     <PersonIcon fontSize="large" className="header__icon"/> 
//                 </IconButton>
//             <img className="header__logo"
//             src={tinder_logo}
//             alt=""/>
//             <IconButton>
//             <ForumIcon fontSize="large" className="header__icon"/>
//             </IconButton>
            
//             </div>
//         );
//     }
// }


// export default Header;