
import UserAuth from './UserAuth';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import useInput from "../hooks/UserInput";
import IconHandle from "../CommonComponents/IconHandler"
import Eyehook from "../hooks/Eyehook"
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const LoginScreen =
    ({ Contacts }) => {
        console.log("render login")
        const user = useInput("");
        const password = useInput("");
        const Eye = Eyehook("FillEye");
       
        let navigate = useNavigate();
        const onAttempt =
            () => {
                if (user.value === '' || password.value === '') {
                    alert(" One or more fields empty")
                    return;
                }

                var check = UserAuth({Contacts, user, password })
                if (!check) {

                    alert("Incorrect user/password")
                    return;
                }

                alert("Connecting ") // just for checking - later will change
                Contacts.UpdateCurrentUser(user.value);
                
                let path = 'App';
                navigate(path);

            }



        return (

            < div className="Login">
                 
                <div className="LoginBubble">
                    

                    
                    <div className="row ">
                       
                        <div className="row-lg-3" />
                        
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2"> {IconHandle("FiUser")}  </span>
                            <input type="text" value={user.value} onChange={user.onChange} className="form-control" placeholder="Username" />



                        </div>

                        <div className="input-group mb-3 ">
                            <span className="input-group-text" id="basic-addon1">   {IconHandle("FillLock")}   </span>
                            <input type={Eye.m} value={password.value} onChange={password.onChange} className="form-control" placeholder="Password" />
                            <div className="input-group-btn">
                                <button variant="btn btn-outline-primary" onClick={Eye.onChange} className="eyebutton-login"  > {IconHandle(Eye.value)} </button>

                            </div>
                        </div>
                        <>



                            <div className="flexbuttons">
                                <Button onClick={onAttempt} as="input" type="button" variant="btn btn-outline-warning" value="login" className="Test1" />
                                <Link to="/Register">
                                    <Button as="input" type="button" variant="btn btn-outline-warning" value="Register" className="Test2" />
                                </Link>
                            </div>
                        </>


                    </div>
                </div>

            </div>

        )
    }

export default LoginScreen;