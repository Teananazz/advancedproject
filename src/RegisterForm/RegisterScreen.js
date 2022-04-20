import React from 'react'
import useState from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import useInput from "../hooks/UserInput";
import IconHandle from "../CommonComponents/IconHandler"
import Eyehook from "../hooks/Eyehook"
import RegisterAuth from './RegisterAuth';
import Filehook from '../hooks/Filehook';
import { Link } from 'react-router-dom';
import {InputGroup, FormControl, Form} from 'react-bootstrap'
import UserContacts from '../CommonComponents/UserContacts'

import { useNavigate } from "react-router-dom";
const RegisterScreen =
    ({ Contacts }) => {
        console.log("render")
        const user = useInput("")
        const password = useInput("")
        const passwordvalid = useInput("")
        const passType = Eyehook("FillEye")
        const passTypeR = Eyehook("FillEye")
        const display = useInput("")
        const photo = Filehook("")
        let navigate = useNavigate();
        console.log("render")
        const onAttempt =
            () => {
                if (user.value === '' || password.value === '' || passwordvalid.value === '' || display.value === '' || photo.value ==='') {
                    alert("One or more fields empty")
                    return;
                }
                var img = photo.value
                var displayval = display.value;
                var check = RegisterAuth({Contacts, user, password, passwordvalid })
             
                if (check === false) {
                    user.setValue("")
                    password.setValue("")
                    passwordvalid.setValue("")
                    display.setValue("")
                    photo.setValue("")
                    return;
                }

                alert("Register Complete ") // just for checking - later will change
                var userinfo = user.value;

               

                var userpassword = password.value;
                Contacts.UpdateList({ userinfo, userpassword, img, displayval})

                user.setValue("")
                password.setValue("")
                passwordvalid.setValue("")
                display.setValue("")


                let path = '/'
                // this will teleport to the login screen without reloading.
                navigate(path);
                
                
               
            }

     
        return (
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        {IconHandle("FiUser")}
                    </InputGroup.Text>
                    <Form.Control type="text"
                        value={user.value}
                        onChange={user.onChange}
                        className="form-control"
                        placeholder="UserName"
                       />
                    </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        {IconHandle("FillLock")}
                    </InputGroup.Text>
                    <Form.Control type={passType.m}
                        value={password.value}
                        onChange={password.onChange}
                        className="form-control"
                        placeholder="Password"
                    />
                    
                    <Button variant="outline-secondary"
                        onClick={passType.onChange}
                        id="button-addon2"
                        className="eyebutton-login2"
                    >
                        {IconHandle(passType.value)}
                        </Button>
                        
                </InputGroup>


                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        {IconHandle("ArrowRepeat")}
                    </InputGroup.Text>
                    <Form.Control type={passTypeR.m}
                        value={passwordvalid.value}
                        onChange={passwordvalid.onChange}
                        className="form-control"
                        placeholder="Password validation"
                    />

                    <Button variant="outline-secondary"
                        onClick={passTypeR.onChange}
                        id="button-addon2"
                        className="eyebutton-login2"
                    >
                        {IconHandle(passTypeR.value)}
                    </Button>

                </InputGroup>

               
             
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        {IconHandle("FiUser")}
                    </InputGroup.Text>
                    <Form.Control type="text"
                        value={display.value}
                        onChange={display.onChange}
                        className="form-control"
                        placeholder="Displayname"
                    />
                </InputGroup>

           

             
                <>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <img src={photo.value} width="200" height="200" />
                        </InputGroup.Text>
                        <Form.Control type="file"
                   
                            onChange={photo.onChange}
                            className="form-control"
                            placeholder="Displayname"
                            aria-label="Upload"
                        />
                    </InputGroup>

                    
                 
                    <div class="flexbuttons">

                        <Link to="/">
                            <Button as="input" type="button" variant="btn btn-outline-warning" value="Back" className="Test2" />
                        </Link>                       

                     

                        <Button
                            onClick={onAttempt}
                            as="input"
                            type="button"
                            variant="btn btn-outline-warning"
                            value="Register"
                            className="Test2"
                        />{''}
                    </div>
                </>

            </>

        )
    }

export default RegisterScreen;