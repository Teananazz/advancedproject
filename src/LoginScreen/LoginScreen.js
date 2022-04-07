
import UserAuth from './UserAuth';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import useInput from "../hooks/UserInput";
import IconHandle from "../CommonComponents/IconHandler"
import Eyehook from "../hooks/Eyehook"

 const LoginScreen =
     () => {
         const user = useInput("");
         const password = useInput("");
         const Eye = Eyehook("FillEye");
     

     const onAttempt =
         () => {
             if (user.value === '' || password.value === '') {
                 alert(" One or more fields empty")
                 return;
             }

             var check = UserAuth(user, password)
             if (!check) {

                 alert("Incorrect user/password")
                 return;
             }

             alert("Connecting ") // just for checking - later will change

         }

    
      
         return (

 <>


                 <div class="row">
                     <div class="col-sm-3" />
          <div class="w-50 p-3" >
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"> {IconHandle("FiUser")}  </span>
                    <input type="text" value={user.value} onChange={user.onChange} className="form-control" placeholder="Username" />

              

               </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">   {IconHandle("FillLock")}   </span>
                    <input type={Eye.m} value={password.value} onChange={password.onChange} className="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                        <button variant="btn btn-outline-primary" onClick={Eye.onChange} className="form-control"  > {IconHandle(Eye.value)} </button>

                    </div>
                </div>
                <>



                    <div class="flexbuttons">
                        <Button onClick={onAttempt} as="input" type="button" variant="btn btn-outline-warning" value="login" className="Test1" />

                        <Button as="input" type="button" variant="btn btn-outline-warning" value="Register" className="Test2" />

                    </div>
               </>

               
          </div>
       </div>
   </>     
           
        )
    }

export default LoginScreen;