import React, { useState } from 'react'
import { Button, Modal, Message, Icon } from 'semantic-ui-react';
import BasicModal from '../../components/Modals/BasicModal/BasicModal';

import classes from './UIElements.module.scss';

export default function UIElements() {

    const [showBasicModal, setShowBasicModal] = useState<boolean>(false);
    const [showBlurredModal, setShowBlurredModal] = useState<boolean>(false);
    const [showNoBackgroundModal, setShowNoBackgroundModal] = useState<boolean>(false);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    return (
        <div className="content">
            <Button primary onClick={() => setShowBasicModal(true)}>
                basic modal
            </Button>
            <Button primary onClick={() => setShowBlurredModal(true)}>
                blurred modal
            </Button>
            <Button primary onClick={() => setShowNoBackgroundModal(true)}>
                no background modal
            </Button>
            <Button primary onClick={() => setShowNotification(true)} className={classes.notificationButton}>
                notification
            </Button>

            <Modal size="mini" open={showBasicModal} onClose={() => setShowBasicModal(false)} closeIcon>
                <BasicModal onButtonClick={() => setShowBasicModal(false)} />
            </Modal>
            <Modal size="mini" open={showBlurredModal} dimmer="blurring" onClose={() => setShowBlurredModal(false)}>
                <BasicModal onButtonClick={() => setShowBlurredModal(false)} />
            </Modal>
            <Modal basic size="mini" open={showNoBackgroundModal} onClose={() => setShowNoBackgroundModal(false)}>
                <BasicModal onButtonClick={() => setShowNoBackgroundModal(false)} />
            </Modal>

            {showNotification && (
                <Message icon color="purple">
                    <Icon name="close" link onClick={() => setShowNotification(false)} />
                    Purple Notification
                </Message>
            )}
            
        </div>
    );
}
