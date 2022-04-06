import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import UserAuth from './UserAuth';

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye} from 'react-icons/ai'

 const LoginScreen =
 () => {
        const [user, setUser] = useState('')
        const [password, setPassword] = useState('')
     const [passType, setType] = useState("password")
     const Icon_Handler =
         (name) => {

             if (name === "Username") {
                 return (<FiUser />)
             }
             if (name === "Password") {
                 return (<AiFillLock />)
             }
             if (name === "password") {
                 return (<AiFillEyeInvisible/>)
             }
             if (name === "text") {
                 return (<AiFillEye />)
             }

         }

     const onAttempt =
         () => {
             if (user === '' || password === '') {
                 alert(" One or more fields empty")
                 return;
             }

             var check = UserAuth({ user }, { password })
             if (!check) {

                 alert("Incorrect user/password")
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
                         {Icon_Handler( passType )}
                     </button>
                     </div>
                </div>
             <>



                 <div class="flexbuttons">


                     <Button
                         onClick={onAttempt}
                         as="input"
                         type="button"
                         variant="btn btn-outline-warning"
                         value="login"
                         className="Test1"
                     />

                     <Button
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

export default LoginScreen;