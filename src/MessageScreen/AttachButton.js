
import IconHandle from "../CommonComponents/IconHandler"

const AttachButton =
    () => {



        return (

            <div class="dropup">
                <button class="dropbtn" id="button-72"> {IconHandle("AttachFile")}</button>
                <div class="dropup-content">
                    <button class="DropUpButtons"  > {IconHandle("Picture")}</button>
                    <button class="DropUpButtons" > {IconHandle("Video")}</button>
                    <button class="DropUpButtons"  > {IconHandle("Voice")}</button>
                </div>
            </div>
            )


    }
export default AttachButton;