
import { useState } from 'react'
const Eyehook =
    (defaultValue) => {

        const [value, setValue] = useState(defaultValue)


        const onChange = (e) => {

            if (value == "password") {
                setValue("text")
            }
            else {
                setValue("password")
            }
   
        }

        return { value, setValue, onChange }
    }

export default Eyehook