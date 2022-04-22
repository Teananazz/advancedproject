import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import IconHandle from "../CommonComponents/IconHandler"
import UserContacts from "../CommonComponents/UserContacts"

const AddGroupButton =
    ({ Input, Contacts }) => {
        const [show, setShow] = useState(false)
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        var List = Contacts;
       

        {/*  added value so that we can use e.target.value to know which user was focused
         *  OnClick we can't know the target value (i think) so i have to use focus.*/}
        var Lisiting = Input.ContactList.map((value) =>
            <Button id={value.id} key={value.id}
                onFocus={(e) => {
                    Input.UpdateGroups({ value })
                  }
                }
                variant="outline-secondary">
                <div className="GroupCanditate">

                    {value.nickname} <br /> <img src={value.img} height="50" width="50" /> <br />


                </div>  </Button>)




        return (
            <>
                <Button variant="outline-secondary" id="AddGroup" onClick={handleShow} >
                    {IconHandle("FiUserPlus")}
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton id="ModalStyle">
                        <Modal.Title id="ModalType" >Adding Users to the Group </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="ModalBody"> {Lisiting} </Modal.Body>
                    <Modal.Footer>



                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>


        )
    }

export default AddGroupButton;