
import React from 'react'
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';

const TextForm =

    ({ name }, props , event) => {

        const Icon_Handler =
            () => {
               
                if (name == "Username") {
                    return ( <FiUser/>)
                }
                if (name == "Password") {
                    return (<AiFillLock />)
                }
                
            }
      

        return (
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">   {Icon_Handler() }   </span>
                <input type="text"   className="form-control" placeholder={name} aria-label={name} aria-describedby="basic-addon1"/>
                   </div>

        
                
               




            )

    }


export default TextForm