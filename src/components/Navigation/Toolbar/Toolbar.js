import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navbar from '../NavigationItems/NavigationItems';
const toolBar = props =>(
    <header className = {styles.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <Navbar/>
        </nav>
    </header>
);
export default toolBar;