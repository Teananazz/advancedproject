import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
const IconHandle =
    (name) => {

        if (name === "FiUser") {
            return (<FiUser />)
        }
        if (name === "FillLock") {
            return (<AiFillLock />)
        }
        if (name === "FillEyeInv") {
            return (<AiFillEyeInvisible />)
        }
        if (name === "FillEye") {
            return (<AiFillEye />)
        }

    }

export default IconHandle