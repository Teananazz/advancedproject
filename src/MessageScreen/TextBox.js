
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHandle from "../CommonComponents/IconHandler"
import AttachButton from './AttachButton'
import { useState } from 'react'
import React from "react";
import SoundRecordButton from '../MessageScreen/SoundRecordComponents/SoundRecordButton'

const TextBox =
    ({ id, Input, Logs, name, ForceGroupListing }) => {

    
        
        {/* using these two to force this componenet to re-render once an img is sent  */ }
        const [Index, UpdatedIndex] = useState("0");
        const ChangeTextBox =
            () => {
                UpdatedIndex(Index.concat("1"));

            }
       

       
        

        var Chat_Log = Logs.GiveLogs({id })


        var Log = Chat_Log?.map((value) => <li key={Math.random().toString(36).substr(2, 9)} className="HostMessages">  {value}   </li>);



        return (


            <>
                <div class="TitleBar">
                    {name}
                    </div>



                <div className="Messages ">
                    <div className="Down">
                        <ul className="list-group">  {Log}   </ul>
                    </div>
                </div>


                <div className="background">



                    <div className="input-group">
                        <div className="input-group-prepend">

                            <button onClick={() => { Logs.UpdateLocalLogs({ id }) }} className="btn btn-outline-secondary" type="button" id="button-72">{IconHandle("Airplane")}</button>

                        </div>
                        <textarea onKeyDown={(e) =>
                        {
                            if (e.key === "Enter") {
                                Logs.UpdateLocalLogs({ id })
                            }
                        }
                     }
                            value={Input.value} onChange={Input.onChange} name="check" autoCorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />

                        <div className="input-group-prepend">

                            <div className="dropup">
                                <button className="dropbtn" id="button-72"> {IconHandle("AttachFile")}</button>
                                <div className="dropup-content">
                                    <AttachButton Logs={Logs} id={id} func={ChangeTextBox} forceGroupListing={ForceGroupListing} />

                                </div>
                            </div>
                           
                            <SoundRecordButton Logs={Logs} id={id} func={ChangeTextBox} forceGroupListing={ForceGroupListing}/>
                            
                            
                        </div>
                    </div>


                </div>
















            </>
        )


    }
export default TextBox