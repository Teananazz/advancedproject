import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import IconHandle from "../CommonComponents/IconHandler"
import UserContacts from "../CommonComponents/UserContacts"

const AddUserButton =
    () => {
        const [show, setShow] = useState(false)
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton id="ModalStyle">
                        <Modal.Title id="ModalType" >Adding new user </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="ModalBody">
                        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label="User name" />

                        <Button variant="secondary" id="Close" onClick={handleClose} />
                        <Button variant="primary" id="Add user" onClick={handleShow} />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>


        )
    }

export default AddUserButton;