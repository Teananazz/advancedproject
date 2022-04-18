

import FileInput from '../CommonComponents/FileInput'
import IconHandle from "../CommonComponents/IconHandler"
import { useState } from 'react'

const AttachButton =
  (props) => {
    console.log(props)

    return (

      <>

        <input

          type="file" onChange={(e) => {
            {/* Using different variables - is it faster ?*/ }
            var Val = e.target.files[0]
            var Val2 = URL.createObjectURL(Val)
            var FinalVal = <img src={Val2} width="200" height="200" alt={Val.name} />

            var phone = props.phone;
            props.Logs.UpdateFileLog({ phone, FinalVal });
            props.func();

          }}

          className="DropUpButtons cancelInput" id="inputGroupFile01" />

        <label className="DropUpButtons" htmlFor="inputGroupFile01">{IconHandle("Picture")}</label>
        <label className="DropUpButtons" htmlFor="inputGroupFile01">{IconHandle("Video")}</label>
      </>
    )


  }
export default AttachButton;