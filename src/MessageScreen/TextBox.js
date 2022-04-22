
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHandle from "../CommonComponents/IconHandler"
import AttachButton from './AttachButton'
import { useState } from 'react'
import React from "react";
import SoundRecordButton from '../MessageScreen/SoundRecordComponents/SoundRecordButton'
import SavedLogs from '../CommonComponents/ScriptedLogs'
import SavedLogForProgram from '../CommonComponents/SavedLogForProgram'

// TODO :
//1 . find out how to make blob work without activating createaddress.
// 2. create five logs for the users by converting to html from savedlogforprogram and then converting from html to jsx.
// 3. find out how to make blob work
// 4.???
// 5. profit.


const TextBox =
    ({ id, Input, Logs, name, ForceGroupListing }) => {

        // this is used to generate differnet styles depending on who sent the message.
        var [MessID, updateID] = useState("0");

        
        {/* using these two to force this componenet to re-render once an img/sound/video is sent  */ }
        const [Index, UpdatedIndex] = useState("0");
        const ChangeTextBox =
            () => {
                UpdatedIndex(Index.concat("1"));

            }

        
        const giveStyle =
            (Arr) => {
               
              

                if (Arr[0] === undefined) {
                    return "";
                }
                if (Arr[0] === "0") {

                   
                    return "HostMessages"

                }
                
                return "ServerMessages"

            }
       
        
        // for some reason when the log of user log is of size one it detects it as string and therfore my entire function not works when i call map so i had to fix it.
        var Chat_Log = Logs.GiveLogs({ id })

      //  console.log(Chat_Log)
        if (Chat_Log != undefined) {

        }
        
        //var Log = Chat_Log?.map((value) => {


        //    return <li key={Math.random().toString(36).substr(2, 9)} className={giveStyle(value)}>  {value[1]}   </li>;


        //}
        //);
        SavedLogForProgram(Log);
       var Log = SavedLogs();

       

        return (


            <>
                <div class="TitleBar">
                    {name}
                    </div>



                <div className="Messages ">
                    <div className="Down flexes" >
                        <ul className="list-group">  {Log}   </ul>
                    </div>
                </div>


                <div className="background">



                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button onClick={(e) => {
                                // write to js file
                                updateID(MessID == "0" ? "1" : "0");
                                
                               


                            }}
                                className="dropbtn" id="button-72" > {IconHandle("FiUserPlus")}</button>


                            <button onClick={() => {  Logs.UpdateLocalLogs({ id, MessID }) }} className="btn btn-outline-secondary" type="button" id="button-72">{IconHandle("Airplane")}</button>

                        </div>
                        <textarea onKeyDown={(e) =>
                        {
                            if (e.key === "Enter") {
                                Logs.UpdateLocalLogs({ id, MessID })
                            }
                        }
                     }
                            value={Input.value} onChange={Input.onChange} name="check" autoCorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />

                        <div className="input-group-prepend">

                            <div className="dropup">
                                <button className="dropbtn" id="button-72"> {IconHandle("AttachFile")}</button>
                                <div className="dropup-content">
                                    <AttachButton Logs={Logs} id={id} func={ChangeTextBox} forceGroupListing={ForceGroupListing} MessID={MessID} />

                                </div>
                            </div>

                           
                            <SoundRecordButton Logs={Logs} id={id} func={ChangeTextBox} forceGroupListing={ForceGroupListing} MessID={MessID}/>
                         
                        </div>
                    </div>


                </div>
















            </>
        )


    }
export default TextBox