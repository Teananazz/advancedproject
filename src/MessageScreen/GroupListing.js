


import Button from 'react-bootstrap/Button'

import TextScreen from './TextScreen'
import Texthook from '../hooks/Texthook'



const GroupListing =
    ({ List }) => {
        
        const Input = Texthook("");
        

        var Screen = TextScreen({ Input });
        var result = Screen.GiveScreen();
        
        const Func =
            (phone) => {
                
                
             
                
                 Screen.Activate( phone )
               
                result = Screen.GiveScreen();
                

            }

  
        

        var Mapping = List.map((value) =>
            <div class ="flex-down"> 
            <Button id="flex"  key={value.phone} onClick={() => Func(value.phone)} variant= "outline-secondary" size ="lg" >
            
                <div class="textalign ">   {value.id} <br /> {value.phone}    </div>
                </Button>
                </div>
                )
       
        return (
            <>
            <div class="d-grid gap-2" id="flex2"   >
               
                {Mapping}
                    
            </div>
           
            {result}
            
                </>

            
            )

    }



export default GroupListing;