

import UserContacts from '../CommonComponents/UserContacts'

import { useState } from "react";

const Grouphook = ({ Contacts }) => {

    const [List, UpdateList] = useState([]);
    const [ContactList, UpdateContactList] = useState(Contacts.Users)
  

    const UniqueContact = ContactList.map((value) =>  value.id );
      


    const UpdateGroups =
        ({ value }) => {

            if (value === "") {
                // need to change it.
                return;
            }

            var Index = UniqueContact.indexOf(value.id);
            //ContactList.splice(Index, 1);  // Indeed, splice actually changes the original array.
            UpdateContactList(ContactList.splice(Index,1))
         
           
            UpdateList(List.concat( value  ));
          



        }
    
    return {   UpdateGroups, List, UpdateList, ContactList, UpdateContactList };
};

export default Grouphook