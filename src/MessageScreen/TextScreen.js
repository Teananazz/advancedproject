

import TextBox from './TextBox'
import {useState} from 'react'
import HoldScreen from './HoldScreen'

const TextScreen =

    ({ Input, Chat_log, UpdateIndex } ) => {
         
        {/* probably needs to activate the side bar that indicates the person above the chat here. */}
        const [Activated_Group, setActivated] = useState("-1");
        const [user, setUser] = useState("")
        const GiveScreen =
            () => {

                if (Activated_Group == -1) {
                    return <HoldScreen/> 

                }
                
                return <TextBox id={Activated_Group} Input={Input} Logs={Chat_log} name={user} ForceGroupListing={UpdateIndex}  />

            }

       

        const Activate =
            (props) => {
                
               

                setUser(props.name);
                setActivated(props.id);
              
            }
        





        return ({ Activate, GiveScreen, Activated_Group, setActivated })




    }

export default TextScreen;