
import { useState } from 'react'
const Eyehook =
    (defaultValue) => {

        const [value, setValue] = useState(defaultValue)


        const onChange = (e) => {

            if (value == "FillEye") {
                setValue("FillEyeInv")
            }
            else {
                setValue("FillEye")
            }
   
        }

        return { value, setValue, onChange }
    }

export default Eyehook