



import { useState } from "react";
import Messages from '../MessageScreen/Messages';
const Texthook = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const [List, UpdateList] = useState([]);

    const onChange = (e) => setValue(e.target.value);
   
    const UpdateMessages =
        (e) => {
            if (value === "") {
                alert("empty message"); // need to change it.
                return;
            }

            UpdateList(List.concat(value));
            setValue("")
           
            

        }

    return { value, setValue, onChange, UpdateMessages, List, UpdateList };
};

export default Texthook