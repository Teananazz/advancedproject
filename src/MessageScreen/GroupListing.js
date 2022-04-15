


import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import TextBox from './TextBox';
import TextScreen from './TextScreen'
const GroupListing =
    ({ List }) => {

       

        const Screen = TextScreen({ List });
        var result = Screen.GiveScreen();
        const Func =
            (phone) => {
                console.log({ phone })
                Screen.Activate({ phone })
                result = Screen.GiveScreen();


            }
       
        var Mapping = List.map((value) =>
             
            <Button id="flex" key={value.phone} onClick={ () => Func(value.phone)} variant = "primary" size ="lg" >
            
                 {value.id} <br /> {value.phone}  
                </Button>
                )
       
        return (
            <>
            <div className="d-grid gap-2" id="flex2"  >
               
                {Mapping}
                    
            </div>
           
            {result}
            
                </>

            
            )

    }



export default GroupListing;