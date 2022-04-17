
import IconHandle from "../CommonComponents/IconHandler"
import AddGroupButton from './AddGroupButton'
const AddGroupBar =
    ({ Input }) => {


        return (
            
            <div className="AddGroupBar" >
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="GroupBarIcon">{IconHandle("3DGlasses")}</button>
                    </div>

                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="GroupBarButtons"> {IconHandle("AttachFile")}</button>
                        <AddGroupButton Input={Input}/>
                        
                    </div>

                </div>


            </div>
        )


    }

export default AddGroupBar;