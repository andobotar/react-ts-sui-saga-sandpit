import React, { useState } from 'react';
import { Button, Modal, Alert, Icon } from 'antd';
import BasicModal from '../../components/Modals/BasicModal/BasicModal';

import classes from './UIElements.module.scss';

export default function UIElements() {

    const [showBasicModal, setShowBasicModal] = useState<boolean>(false);
    const [showBlurredModal, setShowBlurredModal] = useState<boolean>(false);
    const [showNoBackgroundModal, setShowNoBackgroundModal] = useState<boolean>(false);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    return (
        <div className="content">
            <Button.Group>
                <Button type="primary" onClick={() => setShowBasicModal(true)}>
                    basic modal
                </Button>
                <Button type="primary" onClick={() => setShowBlurredModal(true)}>
                    no footer modal
                </Button>
                <Button type="primary" onClick={() => setShowNoBackgroundModal(true)}>
                    no background modal
                </Button>
            </Button.Group>
            <Button type="primary" onClick={() => setShowNotification(true)} className={classes.notificationButton}>
                notification
            </Button>

            <Modal visible={showBasicModal} cancelText="haggyámá" cancelButtonProps={{type: "danger"}} onCancel={() => setShowBasicModal(false)}>
                <BasicModal onButtonClick={() => setShowBasicModal(false)} />
            </Modal>
            <Modal visible={showBlurredModal} footer={null} onCancel={() => setShowBlurredModal(false)}>
                <BasicModal onButtonClick={() => setShowBlurredModal(false)} />
            </Modal>
            <Modal visible={showNoBackgroundModal} onCancel={() => setShowNoBackgroundModal(false)}>
                <BasicModal onButtonClick={() => setShowNoBackgroundModal(false)} />
            </Modal>

            {showNotification && (
                <Alert closable showIcon icon={<Icon type="heart" theme="twoTone" twoToneColor="#f6af30" spin />} type="success" message="Success Notification" description="this is very good news. you should be happy." />
            )}
        </div>
    );
}
