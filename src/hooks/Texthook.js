



import { useState } from "react";

const Texthook = (defaultValue) => {
    {/* value is the current input that might go into the logs. */}
    const [value, setValue] = useState(defaultValue);
    const [Logs, UpdateLogs] = useState(new Map());
    const [ListUser, UpdateListUser] = useState( "-1" )

    const onChange = (e) => setValue(e.target.value);



    const GiveLogs =
        ({ phone }) => {

            return Logs.get(phone);
           

        }


    const UpdateLocalLogs =
        ({ phone }) => {
            if (value === "") {
                alert("empty message"); // need to change it.
                return;
            }
          

           
            if (Logs.has(phone) === false) {
                

                UpdateListUser( phone )
                Logs.set(phone, [])
                
                Logs.get(phone).push({value})
                setValue("")
               
                return;

            }

            UpdateListUser({ phone })

         
          
            Logs.get(phone).push({value})
            setValue("")
           
            

        }

    return { value, setValue, onChange, UpdateLogs, Logs, ListUser, UpdateListUser, GiveLogs, UpdateLocalLogs  };
};

export default Texthook