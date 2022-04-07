import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
const IconHandle =
    (name) => {

        if (name === "Username") {
            return (<FiUser />)
        }
        if (name === "Password") {
            return (<AiFillLock />)
        }
        if (name === "password") {
            return (<AiFillEyeInvisible />)
        }
        if (name === "text") {
            return (<AiFillEye />)
        }

    }

export default IconHandle