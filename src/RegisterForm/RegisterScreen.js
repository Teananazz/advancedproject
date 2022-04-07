import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import RegisterAuth from './RegisterAuth';

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye} from 'react-icons/ai'

const RegisterScreen =
    () => {
        const [user, setUser] = useState('')
        const [password, setPassword] = useState('')
        const [passwordvalid, setPasswordvalid] = useState('')
        const [passType, setType] = useState("password")
        const [display, setDisplay] = useState('')
        const Icon_Handler =
            (name) => {

                if (name === "Username") {
                    return (<FiUser />)
                }
                if (name === "Password") {
                    return (<AiFillLock />)
                }
                if (name === "password") {
                    return (<AiFillEyeInvisible />)
                }
                if (name === "Passwordvalid") {
                    return (<AiFillLock />)
                }
                if (name === "text") {
                    return (<AiFillEye />)
                }
                if (name === "Displayname") {
                    return (<FiUser />)
                }

            }

        const onAttempt =
            () => {
                if (user === '' || password === '' || passwordvalid === '' || display === '') {
                    alert("One or more fields empty")
                    return;
                }

                var check = RegisterAuth(password, passwordvalid)
                if (!check) {
                    // change the alert
                    alert("Please fix your password and your password validation")
                    return;
                }

                alert("Connecting ") // just for checking - later will change

            }

        const togglePassword =
            () => {

                if (passType === "password") {
                    setType("text")
                    return;
                }
                setType("password")

            }

            const togglePasswordValidation =
            () => {

                if (passType === "passwordvalid") {
                    setType("text")
                    return;
                }
                setType("passwordvalid")

            }

        return (
            <>
                <div className="input-group mb-3">
                    <span className="input-group-text"
                        id="basic-addon1">   {Icon_Handler("Username")}   </span>
                    <input type="text"
                        value={user}
                        onChange={

                            (e) => {

                                setUser(e.target.value)
                            }
                        }
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1" />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">   {Icon_Handler("Password")}   </span>
                    <input type={passType}
                        value={password}
                        onChange=
                        {(e) => {
                            setPassword(e.target.value)
                        }
                        }
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1" />

                    <div className="input-group-btn">
                        <button variant="btn btn-outline-primary" onClick={togglePassword} className="form-control"  >
                            {Icon_Handler(passType)}
                        </button>
                    </div>
                </div>



                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">   {Icon_Handler("Password validation")}   </span>
                    <input type={passType}
                        value={passwordvalid}
                        onChange=
                        {(e) => {
                            setPasswordvalid(e.target.value)
                        }
                        }
                        className="form-control"
                        placeholder="Password validation"
                        aria-label="Password validation"
                        aria-describedby="basic-addon1" />

                    <div className="input-group-btn">
                        <button variant="btn btn-outline-primary" onClick={togglePasswordValidation} className="form-control"  >
                            {Icon_Handler(passType)}
                        </button>
                    </div>
                </div>



                <div className="input-group mb-3">
                    <span className="input-group-text"
                        id="basic-addon1">   {Icon_Handler("Displayname")}   </span>
                    <input type="text"
                        value={display}
                        onChange={

                            (e) => {

                                setDisplay(e.target.value)
                            }
                        }
                        className="form-control"
                        placeholder="Displayname"
                        aria-label="Displayname"
                        aria-describedby="basic-addon1" />
                </div>
                <>



                    <div class="flexbuttons">

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