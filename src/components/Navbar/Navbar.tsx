import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navItem}>
                <Link className={classes.navLink} to="/form">
                    Person Form
                </Link>
            </div>
            <div className={classes.navItem}>
                <Link className={classes.navLink} to="/list">
                    Person List
                </Link>
            </div>
            <div className={classes.navItem}>
                <Link className={classes.navLink} to="/stuff">
                    UI Elements
                </Link>
            </div>
        </nav>
    );
}
