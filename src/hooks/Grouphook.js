

import UserContacts from '../CommonComponents/UserContacts'

import { useState } from "react";

const Grouphook = ({ Contacts }) => {

    var [List, UpdateList] = useState([]);
   var [ContactList, UpdateContactList] = useState(Contacts.Users)
  

    const UniqueContact = ContactList.map((value) =>  value.id );
      


    const UpdateGroups =
        ({ value }) => {

            if (value === "") {
                // need to change it.
                return;
            }
            console.log(value);
            var Index = UniqueContact.indexOf(value.id);
            console.log(Index);
            ContactList.splice(Index, 1);  // Indeed, splice actually changes the original array.
            UpdateContactList(ContactList)
           
           
            UpdateList(List.concat(value));
            List = List.concat(value);
          



        }
    
    return {   UpdateGroups, List, UpdateList, ContactList, UpdateContactList };
};

export default Grouphook