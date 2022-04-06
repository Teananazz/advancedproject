
import React from 'react'
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import onAttempt from './../App.js'
import Icon_Handler from './../App.js';

const TextForm =

    ({ name }, { password = '' }) => {

      
        const Changed =
            (e ,props) => {

                onAttempt(e)
                console.log(e, props)

            }

        return (

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">   {Icon_Handler({ name })}   </span>
                <input type="text"
                    value={password}
                    onChange={Changed}
                    className="form-control"
                    placeholder={name}
                    aria-label={name}
                    aria-describedby="basic-addon1" />
            </div>

        
                
               




            )

    }


export default TextForm