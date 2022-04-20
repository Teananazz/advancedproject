
import { useState } from 'react'
import IconHandler from './IconHandler'
const Logs =
    ( Input ) => {

        var today = new Date();
        var time;
        const [Logs, UpdateLogs] = useState(new Map());
        const [LastMessageTime, UpdateLastMessageTime] = useState(new Map())
        const [LastMessage, UpdateLastMessage] = useState(new Map());
       
        const GiveLogs =
            ({ id }) => {

                return Logs.get(id);


            }




     







        const UpdateLocalLogs =
            ({ id }) => {
               
                 time = today.getHours() + ":" + today.getMinutes();   // last message time
              
                        if (Input.value === "") {
                            alert("empty message"); // need to change it.
                            return;
                        }

                   

                        if (Logs.has(id) === false) {



                            Logs.set(id, [])
                            LastMessageTime.set(id, time);
                            LastMessage.set(id, Input.value);



                            Logs.get(id).push(Input.value);
                           

                           
                            UpdateLogs(Logs)
                            UpdateLastMessage(LastMessage);
                            UpdateLastMessageTime(LastMessageTime);
                           
                            Input.setValue("")

                            return;

                        }

                        Input.UpdateListUser({ id })



                Logs.get(id).push(Input.value)

                LastMessageTime.set(id, time);
             
                LastMessage.set(id, Input.value);

                UpdateLogs(Logs);
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);

               

                        Input.setValue("")

                        return;
                    

                   
                

                

            }

        const UpdateFileLog =
            ({ id, FinalVal }) => {

                 time = today.getHours() + ":" + today.getMinutes(); // last message time

                if (Logs.has(id) === false) {

              

                    Logs.set(id, [])
                    Logs.get(id).push(FinalVal)
                    LastMessageTime.set(id, time);

                    LastMessage.set(id, <div> {IconHandler("AttachFile")} </div>);

                    UpdateLogs(Logs);
                    UpdateLastMessage(LastMessage);
                    UpdateLastMessageTime(LastMessageTime);
                   
                  
                   
                   
                    
                    return;

                }

                Logs.get(id).push(FinalVal)
                LastMessageTime.set(id, time);
                LastMessage.set(id, <div> {IconHandler("AttachFile")} </div>);

                UpdateLogs(Logs)
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);
                
               
                return;


               

            }

        const UpdateSoundLog =
            ({ id, FinalVal }) => {
                 time = today.getHours() + ":" + today.getMinutes();
                if (Logs.has(id) === false) {

                    LastMessageTime.set(id, time);
                    LastMessage.set(id, <div> {IconHandler("Voice")} </div>);

                    Logs.set(id, [])

                    Logs.get(id).push(FinalVal)
                    UpdateLogs(Logs)
                    UpdateLastMessage(LastMessage);
                    UpdateLastMessageTime(LastMessageTime);

                    return;

                }



                LastMessageTime.set(id, time);
                LastMessage.set(id, <div> {IconHandler("Voice")} </div>);

                Logs.get(id).push(FinalVal)
                UpdateLogs(Logs)
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);
                return;



            }



        return ({ Logs, UpdateLogs, GiveLogs, UpdateLocalLogs, UpdateFileLog, UpdateSoundLog, LastMessage, LastMessageTime} )



    }

export default Logs;