import { AiFillLock } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import IconHandle from "../CommonComponents/IconHandler"

const TextBox =
    ({ Input ,  phone } ) => {
        
       
        var Logs = Input.GiveLogs({ phone })
        
        var i = 0;
        var Log = Logs?.map(({ value }) => <div key={i++} class="HostMessages">  {value}   </div>);
       
       
        
        return (
            
            
            <>
                
                <div class="Messages ">
                    <div class="Down">
                        <ul  class="list-group"> {Log} </ul>
                    </div>
                </div>
               
                
                <div class="background">

                   
                        
                <div class="input-group">
                    <div class="input-group-prepend">
                            
                            <button onClick={() => { Input.UpdateLocalLogs({ phone }) }} class="btn btn-outline-secondary" type="button" id= "button-72">{IconHandle("Airplane")}</button>
                            
                     </div>
                        <textarea value={Input.value} onChange={Input.onChange} name="check" autoCorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />
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