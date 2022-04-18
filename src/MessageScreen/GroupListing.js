


import Button from 'react-bootstrap/Button'

import TextScreen from './TextScreen'
import Texthook from '../hooks/Texthook'
import Logs from '../CommonComponents/Logs'


const GroupListing =
    ({ List }) => {
        
        const Input = Texthook("");

       const Chat_log = Logs(Input)
      
        var Screen = TextScreen({ Input, Chat_log });
        var result = Screen.GiveScreen();
       
        const Func =
            (props) => {
                
                var phone = props.phone;
                var name = props.id;
                
                
                Screen.Activate({ phone, name })
               
                result = Screen.GiveScreen();
                

            }

  
        

        var Mapping = List.map((value) =>
            <div key={Math.random(1000) + 500} className ="flex-down">
                <Button id="flex" key={value.phone} onClick={() => Func(value)} variant= "outline-secondary" size ="lg" >
            
                    <div  className="textalign ">   {value.id} <br /> {value.phone}    </div>
                </Button>
                </div>
                )
       
        return (
            <>
                <div key={1} className="d-grid gap-2" id="flex2"   >
               
                {Mapping}
                    
            </div>
           
            {result}
            
                </>

            
            )

    }



export default GroupListing;