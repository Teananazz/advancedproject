
import { useState } from 'react'
const Logs =
    ( Input ) => {
       
        const [Logs, UpdateLogs] = useState(new Map());
       
       
      
       
        const GiveLogs =
            ({ phone }) => {

                return Logs.get(phone);


            }


        const UpdateLocalLogs =
            ({ phone }) => {
               
                  
              
                        if (Input.value === "") {
                            alert("empty message"); // need to change it.
                            return;
                        }



                        if (Logs.has(phone) === false) {



                            Logs.set(phone, [])

                            Logs.get(phone).push(Input.value)
                            UpdateLogs(Logs)
                            Input.setValue("")

                            return;

                        }

                        Input.UpdateListUser({ phone })



                        Logs.get(phone).push(Input.value)
                Input.setValue("")

                        return;
                    

                   
                

                

            }

        const UpdateFileLog =
            ({ phone, FinalVal }) => {
                
                if (Logs.has(phone) === false) {

              

                    Logs.set(phone, [])

                    Logs.get(phone).push(FinalVal)
                   
                    
                    return;

                }




                Logs.get(phone).push(FinalVal)
               
                return;


               

            }

        const UpdateSoundLog =
            ({ phone, FinalVal }) => {

                if (Logs.has(phone) === false) {



                    Logs.set(phone, [])

                    Logs.get(phone).push(FinalVal)


                    return;

                }




                Logs.get(phone).push(FinalVal)
                
                return;



            }



        return ({ Logs, UpdateLogs, GiveLogs, UpdateLocalLogs, UpdateFileLog, UpdateSoundLog} )



    }

export default Logs;