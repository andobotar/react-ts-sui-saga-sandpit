import React, { useState } from 'react';
import { Button, Modal, Alert, Icon } from 'antd';
import BasicModal from '../../components/modals/basic-modal';

import classes from './UIElements.module.scss';

 const UIElements: React.FC = () => {

    const [showBasicModal, setShowBasicModal] = useState<boolean>(false);
    const [showBlurredModal, setShowBlurredModal] = useState<boolean>(false);
    const [showThirdModal, setShowThirdModal] = useState<boolean>(false);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    return (
        <div className="content">
            <Button.Group className={classes['ant-btn-group']}>
                <Button type="primary" onClick={() => setShowBasicModal(true)}>
                    basic modal
                </Button>
                <Button type="primary" onClick={() => setShowBlurredModal(true)}>
                    no footer modal
                </Button>
                <Button type="primary" onClick={() => setShowThirdModal(true)}>
                    third modal
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
            <Modal visible={showThirdModal} onCancel={() => setShowThirdModal(false)}>
                <BasicModal onButtonClick={() => setShowThirdModal(false)} />
            </Modal>

            {showNotification && (
                <Alert closable showIcon icon={<Icon type="heart" theme="twoTone" twoToneColor="#f6af30" spin />} type="success" message="Success Notification" description="this is very good news. you should be happy." />
            )}
        </div>
    );
}

export default React.memo(UIElements);
