import Grouphook from '../hooks/Grouphook'
import GroupBar from './GroupBar';
import GroupListing from './GroupListing'
import TextScreen from './TextScreen'
const Groups =
    () => {
        const Input = Grouphook("");

        return (
            <>



                <GroupBar Input={Input} />


                <div class="Groups">


                    <GroupListing List={Input.List} />

                </div>




            </>




        )



        // need to return a small screen with around four buttons including adding a group.




    }



export default Groups;