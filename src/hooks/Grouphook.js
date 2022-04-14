



import { useState } from "react";

const Grouphook = (defaultValue) => {
  //  const [value, setValue] = useState(defaultValue);
    const [List, UpdateList] = useState([]);

  //  const onChange = (e) => setValue(e.target.value);
    
    const UpdateGroups =
        ({ value }) => {

            if (value === "") {
                // need to change it.
                return;
            }


            var PhoneList = List.map((mem) => mem.phone);
            
            if (PhoneList.indexOf(value.phone) != -1) {
              
                return;
            }

            UpdateList(List.concat( value  ));
            



        }

    return {   UpdateGroups, List, UpdateList };
};

export default Grouphook