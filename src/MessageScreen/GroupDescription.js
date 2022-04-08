import { AiFillLock } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import IconHandle from "../CommonComponents/IconHandler"

const GroupDescription =
    () => {

        return (
            <>
                
                <div class="background">
                    
                        
                <div class="input-group">
                    <div class="input-group-prepend">
        
                            <button class="btn btn-outline-secondary" type="button" id= "button-72">{IconHandle("Airplane")}</button>
                            
                     </div>
                        <textarea name="check" autocorrect="on" rows="1" cols=" 1" type="text" placeholder="Write your message" />
                        <div class="input-group-prepend">
                             <pill>
                                <button class="btn btn-outline-secondary" type="button" id="button-72"> {IconHandle("AttachFile")}</button>
                                <button class="btn btn-outline-secondary" type="button" id= "button-72">{IconHandle("3DGlasses")}</button>
                                </pill>
                        </div>
                            </div>
                            
                     
                </div>
             
                    

                     

                   
                

               

             


                

                
                    
           </>
          )








    }
export default GroupDescription