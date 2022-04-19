

import {useState} from 'react'



const UserContacts =
    () => {


        const [Users,UpdateUsers] = useState(
            [
                {
                    id: 'Teanana',
                    password: '123',
                    img:'' , // need to fill it.
                    nickname: 'choco',

                },
                {
                    id: 'Sharon',
                    password: 'qWe365',
                    img: '', // need to fill it
                   nickname: 'moco',

                },
                {
                    id: 'Dude',
                    password: 'WhyYouAreLame32',
                    img: '', // need to fill it.
                   nickname: 'lmao10',
                },
            ]

          )
        const UpdateList =
            ({ userinfo, userpassword, img, displayval }) => {
               
                UpdateUsers(Users.concat({
                    id: userinfo, password: userpassword, img: img,
                    nickname: displayval,

                }));
                
                

            }


        return ({ Users, UpdateList } )


    }



export default UserContacts;