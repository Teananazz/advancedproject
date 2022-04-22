
import { useState } from 'react'
import IconHandler from './IconHandler'
import SavedLogs from '../CommonComponents/ScriptedLogs'
const Logs =
    ( Input ) => {

        var today = new Date();
        var time;
        const [Logs, UpdateLogs] = useState(new Map());
       
      

        // TODO: ID : 0 -> host ID:1 -> from the contact.
        // for ease of making  a log example: do a button to switch ids
        // and also create a function that returns a different style depending on id.
        // gg

      

        const [LastMessageTime, UpdateLastMessageTime] = useState(new Map())
        const [LastMessage, UpdateLastMessage] = useState(new Map());
       
        const GiveLogs =
            ({ id }) => {

               



                return Logs[id];


            }




     







        const UpdateLocalLogs =
            ({ id, MessID }) => {
                
                 time = today.getHours() + ":" + today.getMinutes();   // last message time
              
                        if (Input.value === "") {
                            alert("empty message"); // need to change it.
                            return;
                        }

                   

                if (Logs[id] === undefined) {
                    console.log("YESSSS");
                   
                    var val = Input.value;
                    Logs[id] = [[MessID, val]]
                 
                  

                   
                   

                            //console.log(MessageIDMap);




                            LastMessageTime.set(id, time);
                            LastMessage.set(id, Input.value);



                         
                           

                           
                            UpdateLogs(Logs)
                            UpdateLastMessage(LastMessage);
                            UpdateLastMessageTime(LastMessageTime);
                           
                            Input.setValue("")

                            return;

                        }

                        Input.UpdateListUser({ id })
                var val = Input.value;

              
                Logs[id].push([MessID, val]);
                var Arr = [...Logs[id]];
                console.log("Arr: " + Arr);
               
             

               

                LastMessageTime.set(id, time);
             
                LastMessage.set(id, Input.value);

                UpdateLogs(Logs);
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);
               
               

                        Input.setValue("")

                        return;
                    

                   
                

                

            }

        const UpdateFileLog =
            ({ id, FinalVal, MessID }) => {

                 time = today.getHours() + ":" + today.getMinutes(); // last message time

                if (Logs[id] === undefined) {

              

                    Logs[id] = [[MessID, FinalVal]]



                    LastMessageTime.set(id, time);

                    LastMessage.set(id, <div> {IconHandler("AttachFile")} </div>);

                    UpdateLogs(Logs);
                    UpdateLastMessage(LastMessage);
                    UpdateLastMessageTime(LastMessageTime);
                   
                  
                   
                   
                    
                    return;

                }

                Logs[id].push([MessID, FinalVal]);
                LastMessageTime.set(id, time);
                LastMessage.set(id, <div> {IconHandler("AttachFile")} </div>);

                UpdateLogs(Logs)
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);
                
               
                return;


               

            }

        const UpdateSoundLog =
            ({ id, FinalVal, MessID }) => {
                 time = today.getHours() + ":" + today.getMinutes();
                if (Logs[id] === undefined) {

                    LastMessageTime.set(id, time);
                    LastMessage.set(id, <div> {IconHandler("Voice")} </div>);

                    Logs[id] = [[MessID, FinalVal]]


                    UpdateLogs(Logs)
                    UpdateLastMessage(LastMessage);
                    UpdateLastMessageTime(LastMessageTime);

                    return;

                }



                LastMessageTime.set(id, time);
                LastMessage.set(id, <div> {IconHandler("Voice")} </div>);


                Logs[id].push([MessID, FinalVal]);
                UpdateLogs(Logs)
                UpdateLastMessage(LastMessage);
                UpdateLastMessageTime(LastMessageTime);
                return;



            }



        return ({ Logs, UpdateLogs, GiveLogs, UpdateLocalLogs, UpdateFileLog, UpdateSoundLog, LastMessage, LastMessageTime} )



    }

export default Logs;