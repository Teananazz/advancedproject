

import UserContacts from '../CommonComponents/UserContacts'
import ScriptedLogs from '../CommonComponents/ScriptedLogs'
import { useState } from "react";

const Grouphook = ({ Contacts }) => {

    const [List, UpdateList] = useState(UserContacts().ScriptedContacts); // current shown groups


    const FilteredArray = Contacts.Users.filter(value => value.id != Contacts.CurrentUser)
  

    const [ContactList, UpdateContactList] = useState(FilteredArray) // group canditates.
  

    const UniqueContact = ContactList.map((value) =>  value.id );
      


    const UpdateGroups =
        ({ value }) => {

            if (value === "") {
                // need to change it.
                return;
            }
          
            var Index = UniqueContact.indexOf(value.id);
           // Indeed, splice actually changes the original array. Later will change when i can force re-render.

            var list = ContactList;
            list.splice(Index, 1);

            UpdateContactList(list)
           
            list = List;

            list = list.concat(value);
            UpdateList(list);

          

        }
    
    return {   UpdateGroups, List, UpdateList, ContactList, UpdateContactList };
};

export default Grouphook