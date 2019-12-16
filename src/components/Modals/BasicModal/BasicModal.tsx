import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

import classes from './BasicModal.module.scss';

export default function BasicModal({onButtonClick = ()=>{}}: {onButtonClick?: any}) {
    return (
        <div className={classes.container}>
            <h1>Warning</h1>
            <p>This is a very important message</p>
            <Modal.Actions>
                <Button color="green" inverted onClick={onButtonClick}>
                    <Icon name="checkmark" /> Akkójóvan
                </Button>
            </Modal.Actions>
        </div>
    );
}
