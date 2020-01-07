import React from 'react';

import classes from './BasicModal.module.scss';

type Props = { 
    onButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
};

const BasicModal: React.FC<Props> = ({ onButtonClick }: Props) => {
    return (
        <div className={classes.container}>
            <h1>Warning</h1>
            <p>This is a very important message</p>
            <button onClick={onButtonClick}>click me</button>
        </div>
    );
}

export default React.memo(BasicModal);
