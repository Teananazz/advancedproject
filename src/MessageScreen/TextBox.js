import { AiFillLock } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import IconHandle from "../CommonComponents/IconHandler"
import Texthook from "../hooks/Texthook";
import Messages from './Messages';
const TextBox =
    () => {
        const Input = Texthook("");
      
            
        var Log = Input.List.map((value) =>  <div  class="HostMessages">  {value}   </div>);
        
       
        
        return (
            
            
            <>
                
                <div class="Messages ">
                    <div class="Down">
                        <ul class="list-group"> {Log} </ul>
                    </div>
                </div>
               
                
                <div class="background">

                   
                        
                <div class="input-group">
                    <div class="input-group-prepend">
                            
                            <button onClick={Input.UpdateMessages} class="btn btn-outline-secondary" type="button" id= "button-72">{IconHandle("Airplane")}</button>
                            
                     </div>
                        <textarea value={Input.value} onChange={Input.onChange} name="check" autocorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />
                        <div class="input-group-prepend">
                             
                                <button class="btn btn-outline-secondary" type="button" id="button-72"> {IconHandle("AttachFile")}</button>
                                <button class="btn btn-outline-secondary" type="button" id= "button-72">{IconHandle("3DGlasses")}</button>
                                
                        </div>
                            </div>
                            
                     
                </div>
             

                     

                   
                

               

             


                

                
                    
           </>
          )








    }
export default TextBox