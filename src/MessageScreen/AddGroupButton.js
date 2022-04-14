import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import IconHandle from "../CommonComponents/IconHandler"
import UserContacts from "../CommonComponents/UserContacts"

const AddGroupButton =
    ({Input}) => {
        const [show, setShow] = useState(false)
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

       

        var List = UserContacts();
        {/*  added value so that we can use e.target.value to know which user was focused
         *  OnClick we can't know the target value (i think) so i have to use focus.*/}
        var Lisiting = List.map((value) =>
            <Button key={value.phone} onFocus={() => { Input.UpdateGroups({ value }) } } variant="outline-secondary"> <div class="GroupCanditate">

                {value.id} <br />  {value.phone} <br/>

            </div>  </Button>)

        //var List = UserContacts.UserContacts;
        //{/* Group = styling for a normal user name */}
        //var mapping = List.map((value) => <div class ="Group"> {value.id}  </div>)
        

        return (
            <>
                <Button variant="outline-secondary" id="AddGroup" onClick={handleShow} >
                    {IconHandle("FiUserPlus")}
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton id="ModalStyle">
                        <Modal.Title id="ModalType" >Adding Users to the Group </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id = "ModalBody"> {Lisiting} </Modal.Body>
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
                //    <div class="input-group">
                //<button class="btn btn-outline-secondary" type="button" id="AddGroupButton" data-toggle="modal" data-target="#exampleModalLong">{IconHandle("FiUserPlus")}</button>
                //    </div>
               
           
          )
    }

export default AddGroupButton;