import React from 'react';

import classes from './BasicModal.module.scss';

export default function BasicModal({onButtonClick = ()=>{}}: {onButtonClick?: any}) {
    return (
        <div className={classes.container}>
            <h1>Warning</h1>
            <p>This is a very important message</p>
        </div>
    );
}
