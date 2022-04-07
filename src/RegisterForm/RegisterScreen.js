
import UserAuth from '../LoginScreen/UserAuth'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


import useInput from "../hooks/UserInput";
import IconHandle from "../CommonComponents/IconHandler"
import Eyehook from "../hooks/Eyehook"
import RegisterAuth from './RegisterAuth';

const RegisterScreen =
    () => {
        const user = useInput("")
        const password = useInput("")
        const passwordvalid = useInput("")
        const passType = Eyehook("FillEye")
        const passTypeR = Eyehook("FillEye")
        const display = useInput("")


      

        const onAttempt =
            () => {
                if (user === '' || password === '' || passwordvalid === '' || display === '') {
                    alert("One or more fields empty")
                    return;
                }

                var check = RegisterAuth(password, passwordvalid)
                console.log(password)
                console.log(passwordvalid)
                console.log(check)
                if (check === false) {
                    alert("Please fix your password and your password validation")
                    return;
                }

                alert("Connecting ") // just for checking - later will change

            }

       

        return (
            <>
                <div className="input-group mb-3">
                    <span className="input-group-text"
                        id="basic-addon1">   {IconHandle("FiUser")}   </span>
                    <input type="text"
                        value={user.value}
                        onChange={user.onChange}
                        className="form-control"
                        placeholder="Username"
                         />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">   {IconHandle("FillLock")}   </span>
                    <input type={passType.m}
                        value={password.value}
                        onChange={password.onChange}
                        className="form-control"
                        placeholder="Password"
                        />

                    <div className="input-group-btn">
                        <button variant="btn btn-outline-primary" onClick={passType.onChange} className="form-control"  >
                            {IconHandle(passType.value)}
                        </button>
                    </div>
                </div>



                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">   {IconHandle("ArrowRepeat")}   </span>
                    <input type={passTypeR.m}
                        value={passwordvalid.value}
                        onChange={passwordvalid.onChange}
                        className="form-control"
                        placeholder="Password validation"
                       />

                    <div className="input-group-btn">
                        <button variant="btn btn-outline-primary" onClick={passTypeR.onChange} className="form-control"  >
                            {IconHandle(passTypeR.value)}
                        </button>
                    </div>
                </div>



                <div className="input-group mb-3">
                    <span className="input-group-text"
                        id="basic-addon1">   {IconHandle("FiUser")}   </span>
                    <input type="text"
                        value={display.value}
                        onChange={display.onChange}
                        
                        className="form-control"
                        placeholder="Displayname"
                         />
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