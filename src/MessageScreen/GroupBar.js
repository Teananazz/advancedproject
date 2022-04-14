
import IconHandle from "../CommonComponents/IconHandler"
import AddGroupButton from './AddGroupButton'
const AddGroupBar =
    ({ Input }) => {


        return (
            
            <div class="AddGroupBar" >
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="GroupBarIcon">{IconHandle("3DGlasses")}</button>
                    </div>

                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="GroupBarButtons"> {IconHandle("AttachFile")}</button>
                        <AddGroupButton Input={Input}/>
                        
                    </div>
                   

                   
                
                
               




            </div>


            </div>
            )




    }

export default AddGroupBar;