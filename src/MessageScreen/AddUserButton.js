import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import IconHandle from "../CommonComponents/IconHandler"
import UserContacts from "../CommonComponents/UserContacts"

const AddUserButton =
    () => {
        
        return (
            <>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label="User name"/>
                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary">
                    Add user
                </Button>
            </>
          
          )
    }

export default AddUserButton;