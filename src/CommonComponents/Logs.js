
import { useState } from 'react'
const Logs =
    ( Input ) => {
       
        const [Logs, UpdateLogs] = useState(new Map());
       
       
      
       
        const GiveLogs =
            ({ id }) => {

                return Logs.get(id);


            }


        const UpdateLocalLogs =
            ({ id }) => {
               
                  
              
                        if (Input.value === "") {
                            alert("empty message"); // need to change it.
                            return;
                        }



                        if (Logs.has(id) === false) {



                            Logs.set(id, [])

                            Logs.get(id).push(Input.value)
                            UpdateLogs(Logs)
                            Input.setValue("")

                            return;

                        }

                        Input.UpdateListUser({ id })



                        Logs.get(id).push(Input.value)
                Input.setValue("")

                        return;
                    

                   
                

                

            }

        const UpdateFileLog =
            ({ id, FinalVal }) => {
                
                if (Logs.has(id) === false) {

              

                    Logs.set(id, [])

                    Logs.get(id).push(FinalVal)
                   
                    
                    return;

                }




                Logs.get(id).push(FinalVal)
               
                return;


               

            }

        const UpdateSoundLog =
            ({ id, FinalVal }) => {

                if (Logs.has(id) === false) {



                    Logs.set(id, [])

                    Logs.get(id).push(FinalVal)


                    return;

                }




                Logs.get(id).push(FinalVal)
                
                return;



            }



        return ({ Logs, UpdateLogs, GiveLogs, UpdateLocalLogs, UpdateFileLog, UpdateSoundLog} )



    }

export default Logs;