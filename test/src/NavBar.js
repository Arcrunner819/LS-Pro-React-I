import React, { Component } from 'react';
import './NavBar.css';
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {
    render() {
        return(
            <div className="navbar">
                <NavBarButton />
                <NavBarButton />
                <NavBarButton />
            </div>
            
            );
    }
}
