

import UserContacts from '../CommonComponents/UserContacts'

import { useState } from "react";

const Grouphook = (defaultValue) => {

    const [List, UpdateList] = useState([]);
    const [ContactList, UpdateContactList] = useState(UserContacts())


    const UniqueContact = ContactList.map((value) =>  value.phone );
      


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
            var Index = UniqueContact.indexOf(value.phone);
            ContactList.splice(Index, 1);  // Indeed, splice actually changes the original array.
            UpdateContactList(ContactList)
         
           
            UpdateList(List.concat( value  ));
            




        }
    
    return {   UpdateGroups, List, UpdateList, ContactList, UpdateContactList };
};

export default Grouphook