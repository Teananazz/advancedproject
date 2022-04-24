import Grouphook from '../hooks/Grouphook'
import GroupBar from './GroupBar';
import GroupListing from './GroupListing'
import TextScreen from './TextScreen'
import { Container, Row, Col } from 'react-bootstrap'

const Groups =
    ({ Contacts }) => {
        const Input = Grouphook({ Contacts });
       
        
        return (
            
          <>
                
                
                    
                        <GroupBar Input={Input} Contacts={Contacts} />

                   



                   
                        <GroupListing List={Input.List} Contacts={Contacts} />
                       
                
          
                </>

           
        )



                            
                       
                       
                   
               

   

        



        // need to return a small screen with around four buttons including adding a group.




    }



export default Groups;