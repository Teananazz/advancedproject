

import UserContacts from '../CommonComponents/UserContacts'
import ScriptedLogs from '../CommonComponents/ScriptedLogs'
import { useState } from "react";

const Grouphook = ({ Contacts }) => {

    var Filtered = UserContacts().ScriptedContacts.filter((value, index) => index >= 5);
    var Filtered_else = UserContacts().ScriptedContacts.filter((value, index) => index < 5);

    

    const [List, UpdateList] = useState(Contacts.CurrentUser === 'Teanana'? Filtered: Filtered_else); // current shown groups


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