import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import { TiArrowRepeat } from 'react-icons/ti';
import { HiPaperAirplane } from 'react-icons/hi';
import { Gi3DGlasses } from 'react-icons/gi'
import { MdAttachFile} from 'react-icons/md'
const IconHandle =
    (name) => {
        switch (name) {

            case ("FiUser"):
                return (<FiUser />);
            case ("FillLock"):
                return (<AiFillLock />)
            case ("FillEyeInv"):
                return (<AiFillEyeInvisible />)
            case ("FillEye"):
                return (<AiFillEye />);
            case ("ArrowRepeat"):
                return (<TiArrowRepeat />);
            case ("Airplane"):
                return (<HiPaperAirplane />);
            case ("3DGlasses"):
                return (<Gi3DGlasses />)
            case ("AttachFile"):
                return (<MdAttachFile />);

        }
     
    }

export default IconHandle