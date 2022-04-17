﻿
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHandle from "../CommonComponents/IconHandler"
import AttachButton from './AttachButton'
import { useState } from 'react'
import React from "react";

const TextBox =
    ({ Input, phone, Logs }) => {



        {/* using these two to force this componenet to re-render once an img is sent  */ }
        const [Index, UpdatedIndex] = useState("0");
        const ChangeTextBox =
            () => {
                UpdatedIndex(Index.concat("1"));



            }



        console.log("rendered")

        var Chat_Log = Logs.GiveLogs({ phone })


        var Log = Chat_Log?.map((value) => <li key={Math.random().toString(36).substr(2, 9)} className="HostMessages">  {value}   </li>);



        return (


            <>

                <div className="Messages ">
                    <div className="Down">
                        <ul className="list-group">  {Log}   </ul>
                    </div>
                </div>


                <div className="background">



                    <div className="input-group">
                        <div className="input-group-prepend">

                            <button onClick={() => { Logs.UpdateLocalLogs({ phone }) }} className="btn btn-outline-secondary" type="button" id="button-72">{IconHandle("Airplane")}</button>

                        </div>
                        <textarea value={Input.value} onChange={Input.onChange} name="check" autoCorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />

                        <div className="input-group-prepend">

                            <div className="dropup">
                                <button className="dropbtn" id="button-72"> {IconHandle("AttachFile")}</button>
                                <div className="dropup-content">
                                    <AttachButton Logs={Logs} phone={phone} func={ChangeTextBox} />

                                </div>
                            </div>
                            <button className="btn btn-outline-secondary" type="button" id="button-72">{IconHandle("3DGlasses")}</button>

                        </div>
                    </div>


                </div>
















            </>
        )


    }
export default TextBox