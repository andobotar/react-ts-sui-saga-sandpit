import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';

const Navbar: React.FC = () => {
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

export default React.memo(Navbar);