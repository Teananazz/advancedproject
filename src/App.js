

import TextForm from './LoginScreen/TextForm'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';



// after joke 2
//after joke 3
import {useState} from 'react'


const App =
    () => {

        const [user, setUser] = useState('')
        const [password, setPassword] = useState('')

        const Icon_Handler =
            (name) => {

                if (name == "Username") {
                    return (<FiUser />)
                }
                if (name == "Password") {
                    return (<AiFillLock />)
                }

            }
        const Handler =
            (e) => {
                console.log(e)
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
                    <span className="input-group-text" id="basic-addon1">   {Icon_Handler("Password") }   </span>
                    <input type="text"
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
                   </div>

             </>



        )
    }




export default App;
