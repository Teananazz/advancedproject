



import { useState } from "react";
import Messages from '../MessageScreen/Messages';
const Texthook = (defaultValue, phone) => {
    const [value, setValue] = useState(defaultValue);
    const [List, UpdateList] = useState(new Map());
    const [ListUser, UpdateListUser] = useState( phone )

    const onChange = (e) => setValue(e.target.value);




    const UpdateMessages =
        (e) => {
            if (value === "") {
                alert("empty message"); // need to change it.
                return;
            }

           
            if (List.has(phone ) === false) {
                UpdateListUser( phone )
                List.set(phone, [])
                
                List.get(phone).push({value})
                setValue("")
               
                return;

            }

            UpdateListUser({ phone })

         
          
            List.get(phone).push({value})
            setValue("")
           
            

        }

    return { value, setValue, onChange, UpdateMessages,  List , UpdateList, ListUser, UpdateListUser };
};

export default Texthook