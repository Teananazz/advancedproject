

import TextBox from './TextBox'
import {useState} from 'react'
import HoldScreen from './HoldScreen'
const TextScreen =

    ({ List }) => {
        {/* probably needs to activate the side bar that indicates the person above the chat here. */}
        const [Activated_Group, setActivated] = useState("-1");

        const GiveScreen =
            () => {

                if (Activated_Group == -1) {
                    return <HoldScreen/> 

                }

                return <TextBox user={Activated_Group} />

            }

        const Listing = List.map((value) =>  value.phone );

        const Activate =
            (value) => {

                var index = Listing.indexOf(value);
                setActivated({ value });
                GiveScreen();
            }
        





        return ({Activate, GiveScreen,Activated_Group, setActivated})




    }

export default TextScreen;