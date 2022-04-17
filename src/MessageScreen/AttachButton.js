
import IconHandle from "../CommonComponents/IconHandler"
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagehook from "../hooks/Imagehook";

const AttachButton =
    () => {
        const photo = Imagehook("")
        const onPicture =
            () => {
                
            }

        const onVideo =
            () => {

            }

        const onVoice =
            () => {

            }


        return (

            <div class="dropup">
                <button class="dropbtn" id="button-72"> {IconHandle("AttachFile")}</button>
                <div class="dropup-content">
                    <button onClick={onPicture} class="DropUpButtons" > {IconHandle("Picture")}</button>
                    <button onClick={onVideo} class="DropUpButtons" > {IconHandle("Video")}</button>
                    <button onClick={onVoice} class="DropUpButtons"  > {IconHandle("Voice")}</button>
                </div>
            </div>
            )


    }
export default AttachButton;