

import TextBox from './TextBox'
import {useState} from 'react'
import HoldScreen from './HoldScreen'
import Texthook from '../hooks/Texthook'
const TextScreen =

    ({ Input } ) => {
         
        {/* probably needs to activate the side bar that indicates the person above the chat here. */}
        const [Activated_Group, setActivated] = useState("-1");
        
        const GiveScreen =
            () => {

                if (Activated_Group == -1) {
                    return <HoldScreen/> 

                }
               
                return <TextBox phone={Activated_Group} Input={Input} />

            }

       

        const Activate =
            (value) => {
                
                if (Activated_Group ==  value ) {
                    console.log("le");
                }


                setActivated(value);
              
            }
        





        return ({ Activate, GiveScreen, Activated_Group, setActivated })




    }

export default TextScreen;