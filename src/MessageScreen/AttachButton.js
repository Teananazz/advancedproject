

import FileInput from '../CommonComponents/FileInput'
import IconHandle from "../CommonComponents/IconHandler"
import { useState } from 'react'

const AttachButton =
  (props) => {
     

     
      
    return (

      <>

        <input

                type="file" onChange={(e) => {
                    var SmallImg = document.getElementById("SmallImg");
                    var BigImg = document.getElementById("BigImg");
                    var ModalImg = document.getElementById("ModalImg");
                  




            {/* Using different variables - is it faster ?*/ }
            var Val = e.target.files[0]
            var Val2 = URL.createObjectURL(Val)
                    var FinalVal =
                        <>
                            <img id="SmallImg" src={Val2} width="200" height="200" alt={Val.name}
                                onClick={
                                    (e) => {
                                        var ModalImg = document.getElementById("ModalImg");
                                        var BigImg = document.getElementById("BigImg");
                                       
                                        BigImg.src = e.target.src;
                                        ModalImg.style.display ="block"
                                        

                                    }

                                }
                            />
                              
                            
                            <div id="ModalImg" class ="modal">

                                <span class="close" onClick=
                                    {(e) => {
                                    var ModalImg = document.getElementById("ModalImg");
                                    ModalImg.style.display="none"

                                    }}
                                    
                                    > &times; </span>
                            <img class="modal-content" id="BigImg"/>
                         </div>
                        </>
                         
            var phone = props.phone;
            props.Logs.UpdateFileLog({ phone, FinalVal });
            props.func();

          }}

          className="DropUpButtons cancelInput" id="inputGroupFile01" />

            <label className="DropUpButtons" htmlFor="inputGroupFile01">{IconHandle("Picture")}</label>

            <input

                type="file" onChange={(e) => {
                    {/* Using different variables - is it faster ?*/ }
                    var Val = e.target.files[0]
                    var Val2 = URL.createObjectURL(Val)
                    var FinalVal =
                        <video width ="320" height = "240" controls>
                        <source src={Val2} type ="video/mp4" />
                            </video>
                    var phone = props.phone;
                    props.Logs.UpdateFileLog({ phone, FinalVal });
                    props.func();

                }}

                className="DropUpButtons cancelInput" id="inputGroupFile02" />


        <label className="DropUpButtons" htmlFor="inputGroupFile02">{IconHandle("Video")}</label>
      </>
    )


  }
export default AttachButton;